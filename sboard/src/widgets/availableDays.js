import React, {useEffect} from 'react'
import '../css/widgets/availabilityStatus.css'
import {CheckLg, XLg}  from 'react-bootstrap-icons'
import getUser from '../services/sboardService';
import { getAvailabilityByUserId } from '../services/availabilityService';
import { useSelector } from 'react-redux';

function AvailableDays() {
    const {userId} = useSelector((state) => state.user)


    const changeAvaSettings = async () => {
        
    } 
    
    useEffect(() => {
        (async () => {
            let data = await getAvailabilityByUserId(userId);
            console.log(data );
        })();
      }, []);

    return (
        <div className="row">
            <div className="col dashboard-widget">
                <h5>Aantal actieve dagen</h5>
                <p>
                    Aantal dagen dat een docent beschikbaar is op school
                </p>
                <div className='row w-200 m-0 text-center'>
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default AvailableDays;
  