import Navbar from "../widgets/navbar";
import ShortcutBar from "../widgets/shortcutBar";
import { useSelector } from "react-redux";

import '../css/pages/sboard.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../css/content.css'
//Content Routes
import Dashboard from '../layouts/dashboard.js'
import Presentations from '../layouts/presentations'
import Availability from '../layouts/availability';
import Profile from "../layouts/profile";
import { ToastContainer } from "react-toastify";
import Users from "../layouts/users";


function Sboard() {
    const {role} = useSelector((state) => state.user)
    return (
        <div className='container-fluid wrapper'>
            <ToastContainer/>
            <div className='row h-100'>
                <Navbar />
                <div className="col-md-8 content">
                    <Routes>
                        <Route path='/beschikbaarheid' element={<Availability/>}></Route>
                        <Route path='/dashboard' element={<Dashboard/>}></Route>
                        <Route path='/presentaties' element={<Presentations/>}></Route>
                        <Route path='/profile' element={<Profile/>}></Route>
                        {
                            role == "ROLE_ADMIN" && 
                            <Route path='/gebruikers' element={<Users/>}></Route>
                        }
                        
                    </Routes>
                </div>
                <ShortcutBar />
            </div>
        </div>
    );
}
  
export default Sboard;