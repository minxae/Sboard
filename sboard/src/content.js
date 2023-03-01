import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './css/content.css'
//Content Routes
import Dashboard from './layouts/dashboard.js'
import Presentations from './layouts/presentations'
import Availability from './layouts/availability';

function content() {
  return (
    <div className="col-md-8 content">
        <Routes>
            <Route exact path='/beschikbaarheid' element={<Availability/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/presentaties' element={<Presentations/>}></Route>
        </Routes>
    </div>
  );
}


export default content;
