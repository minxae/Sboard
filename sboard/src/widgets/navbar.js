import React from 'react';
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import {Speedometer, Clock, ListUl}  from 'react-bootstrap-icons'


function navbar() {
  return (
    <div className="col-md-2 nav-bar">
        <h1  className='sboard-header'>Sboard</h1>
        <p className='sboard-subheader'>NHL Stenden</p>
        <ul>
            <li>
                <Speedometer className='me-2'/> <Link to="/dashboard"> Dashboard</Link>
            </li>
            <li>
                <Clock className='me-2'/> <Link to="/beschikbaarheid">Beschikbaarheid</Link>
            </li>
            <li>
                <ListUl className='me-2'/> <Link to="/presentations">Presentaties</Link>
            </li>
        </ul>
        <div className='profile-item row align-items-center w-100 m-0 align-items-end'>
            <div className='col-md-3'>
                <img className='user-img' height="40px" src="/images/default.png"/>
            </div>
            <div className='col-md-9'>
                <h5 className='m-0'>Elise Siersema</h5>
                <p className='m-0'>Beschikbaar</p>
            </div>
            
        </div>
    </div>
  );
}

export default navbar;
