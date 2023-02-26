import React from 'react';
import { Link } from 'react-router-dom'
import '../css/navbar.css'

function navbar() {
  return (
    <div className="col-md-2 nav-bar">
        <h1  className='sboard-header'>Sboard</h1>
        <p className='sboard-subheader'>NHL Stenden</p>
        <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/">Beschikbaarheid</Link>
            </li>
            <li>
                <Link to="/presentations">Presentaties</Link>
            </li>
        </ul>
    </div>
  );
}

export default navbar;
