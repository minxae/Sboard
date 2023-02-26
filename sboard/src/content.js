import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './css/content.css'
//Content Routes
import Dashboard from './layouts/dashboard.js'
import Presentations from './layouts/presentations'

function content() {
  return (
    <div className="col-md-8 content">
        <Routes>
            <Route exact path='/' element={<h1>nothing</h1>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/presentations' element={<Presentations/>}></Route>
        </Routes>
    </div>
  );
}

export default content;
