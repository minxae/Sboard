import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/widgets/navbar.css'
import {Speedometer, Clock, ListUl}  from 'react-bootstrap-icons'
import { useSelector } from 'react-redux';

function Navbar() {
    const {userId, username} = useSelector((state) => state.user)
    const nav = useNavigate();
    const navigate = (path) => {
        nav(path);
    }

    return (
        <div className="col-md-2 nav-bar">
            <h1  className='sboard-header'>Sboard</h1>
            <p className='sboard-subheader'>NHL Stenden</p>
            <ul>
                <li onClick={() => navigate("/dashboard")}>
                    <Speedometer className='me-2'/>  Dashboard
                </li>
                <li onClick={() => navigate("/beschikbaarheid")}>
                    <Clock className='me-2'/> Beschikbaarheid
                </li>
                <li onClick={() => navigate("/presentaties")}>
                    <ListUl className='me-2'/> Presentaties
                </li>
            </ul>
            <div onClick={() => navigate("/profile")} className='profile-item row align-items-center w-100 m-0 align-items-end'>
                <div className='col-md-3'>
                    <img className='user-img' height="40px" src="/images/default.png"/>
                </div>
                <div className='col-md-9'>
                    <h5 className='m-0'>{username}</h5>
                    <p className='m-0'>Beschikbaar</p>
                </div>
                
            </div>
        </div>
  );
}

export default Navbar;
