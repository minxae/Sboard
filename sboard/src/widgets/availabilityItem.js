import { useEffect, useState } from 'react';
import '../css/widgets/availabilityItem.css' 
import { CaretRightFill } from 'react-bootstrap-icons';
function AvailabilityItem(props) {
    const [day, setDay] = useState(props.day)
    const [id, setId] = useState(props.availabilityData.id)
    const [start, setStart] = useState(props.availabilityData.startTime)
    const [end, setEnd] = useState(props.availabilityData.endTime)
    
    const changeAvaSettings = async () => {
        console.log(start,end)
        if(id){
            if(!start && !end){
                console.log("Deleting " + day)
            }else {
                console.log("Updating " + day)
            }
        } else {
            console.log("Creating " + day)
        }
    }
    
    return (
      <div  className='row w-100 m-0 availability-item'>
        <div className='col'>
            <div className='row'>
                <div className={!start && !end ? 'col availability-header': 'col availability-header active'}>
                    <h5  className='day'>
                        {day}
                    </h5>
                </div>
            </div>
            <div className='row text-center p-4'>
                <div className='col-md-4'>
                    <input type="time" className="form-control input-time" onChange={e => {setStart(e.target.value);}} placeholder="" value={start}/>
                </div>
                <div className='col-md-4 ava-icon'>
                    <CaretRightFill/>
                </div>
                <div className='col-md-4'>
                    <input type="time" className="form-control input-time" onChange={e => {setEnd(e.target.value);}} placeholder="" value={end} />
                </div>
            </div>
        </div>        
      </div>
    );
  }
  
  export default AvailabilityItem;
  