import { useEffect, useState } from 'react';
import '../css/widgets/availabilityItem.css' 
import { CaretRightFill, PatchPlusFill,  PatchMinusFill, ArrowClockwise} from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import { createAvailability, deleteAvailability, getAvailability, updateAvailability } from '../services/availabilityService';
import { useSelector } from 'react-redux';
import { getDayInEnglish } from '../utils';

function AvailabilityItem(props) {
    const {userId} = useSelector((state) => state.user)
    const [day, setDay] = useState(props.day)
    const [id, setId] = useState(props.availabilityData.id)
    const [start, setStart] = useState(props.availabilityData.startTime)
    const [end, setEnd] = useState(props.availabilityData.endTime)
    const [oldStart, setOldStart] = useState(props.availabilityData.startTime)
    const [oldEnd, setOldEnd] = useState(props.availabilityData.endTime)
    const [focusState, setFocusState] = useState(true)
    
    const changeAvaSettings = async () => {
        if(oldStart != start || oldEnd != end ){
            if(id){
                if(!start && !end){
                    console.log("deleting data")
                    deleting({id, day});
                    setId(null);
                    
                }else {
                    if(start && end){
                        console.log("Updating " + day)
                        update({end, start, id, userId, day});
                    }
                }
            } else {
                if(start && end){
                    await create({end, start, id, userId, day})
                    let singleDay = await getAvailabilityByDay({day, userId});
                    setId(singleDay.id)
                }
            }
        }  
    } 
    
    return (
      <div  className='row w-100 m-0 availability-item'>
        <div className='col'>
            <div className='row'>
                <div className={!start && !end ? 'col availability-header': 'col availability-header active'}>
                    <h5 className='day'>
                        {day}
                    </h5>
                </div>
            </div>
            <div className='row text-center p-4'>
                <div className='col-md-4'>
                    <input 
                        type="time" 
                        className="form-control input-time" 
                        onChange={e => {setStart(e.target.value);}} 
                        onBlur={e => {changeAvaSettings(e.target.value); setFocusState(true); setOldStart(e.target.value)}} 
                        placeholder="" 
                        value={start}
                        onFocus={e => {setFocusState(false); focusState ? setOldStart(e.target.value) : console.log()}}
                    />
                </div>
                <div className='col-md-4 ava-icon'>
                    <CaretRightFill/>
                </div>
                <div className='col-md-4'>
                    <input 
                    type="time" 
                    className="form-control input-time" 
                    onChange={e => {setEnd(e.target.value);}} 
                    onBlur={e => {changeAvaSettings(e.target.value); setFocusState(true); setOldEnd(e.target.value)}} 
                    placeholder="" 
                    value={end}
                    onFocus={e => {setFocusState(false); focusState ? setOldEnd(e.target.value) : console.log()}}
                    />
                </div>
            </div>
        </div>        
      </div>
    );
}

async function getAvailabilityByDay(obj){
    let data = await getAvailability();
    if(data.status == 200){
        let json = await data.json();
        for(let i in json){
            let day = json[i];
            if(day.userId == obj.userId && getDayInEnglish(obj.day) == day.weekDay){
                return day;
            }
        }
    }
}

async function update(obj){
    let update = await updateAvailability(obj)
    if(update.status == 200){
        toast.success("Beschikbaarheid voor " + obj.day + " gewijzigd.")
    }else {
        toast.error("Check de beschikbaarheid op validiteit!")
    }
}

async function create(obj){
    let create = await createAvailability(obj)
    console.log(create.status)
    if(create.status === 201){
        toast.success("Beschikbaar op " + obj.day)
    }else {
        toast.error("Check de beschikbaarheid op validiteit!")
    }
}
async function deleting(obj){
    let deleting = await deleteAvailability(obj.id)
    console.log(deleting.status)
    if(deleting.status == 204){
        toast.success(obj.day + " verwijderd uit uw beschikbaarheid")
    }else {
        toast.error("U werkt niet op deze dag")
    }
}

  
  export default AvailabilityItem;
  