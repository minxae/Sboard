import React from 'react'
import '../css/widgets/availabilityStatus.css'
import {CheckLg, XLg}  from 'react-bootstrap-icons'
import getUser from '../services/sboardService';

function AvailabilityStatus() {

    getUser();
    return (
        <div className="row">
            <div className="col dashboard-widget">
                <h5>Actieve presentaties</h5>
                <p>
                Alle actieve presentaties op het bord te zien door studenten 
                </p>
                <div className='row w-100 m-0 text-center'>
                    <div className='col m-1'>
                        <button className='btn btn-primary availability-btn active'>Auto</button>
                    </div>
                    <div className='col m-1'>
                        <button className='btn btn-primary availability-btn'><CheckLg/></button>
                    </div>
                    <div className='col m-1'>
                        <button className='btn btn-primary availability-btn'><XLg/></button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default AvailabilityStatus;
  