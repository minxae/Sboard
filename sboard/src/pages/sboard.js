import Navbar from "../widgets/navbar";
import ShortcutBar from "../widgets/shortcutBar";

import '../css/pages/sboard.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '../css/content.css'
//Content Routes
import Dashboard from '../layouts/dashboard.js'
import Presentations from '../layouts/presentations'
import Availability from '../layouts/availability';

function Sboard() {


    return (
        <div className='container-fluid wrapper'>
            <div className='row h-100'>
                <Navbar />
                <div className="col-md-8 content">
                    <Routes>
                        <Route path='/beschikbaarheid' element={<Availability/>}></Route>
                        <Route path='/dashboard' element={<Dashboard/>}></Route>
                        <Route path='/presentaties' element={<Presentations/>}></Route>
                    </Routes>
                </div>
                <ShortcutBar />
            </div>
        </div>
    );
  }
  
export default Sboard;