import {getAvailability} from "../services/availabilityService"
import AvailabilityItem from "../widgets/availabilityItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Availability() {
    const {userId} = useSelector((state) => state.user)
    const [data, setData] = useState(null);
    
    useEffect(() => {
        async function fetchData(){
            let data = await getAvailability();
            let json =  await data.json();
            let userAvailability = [];
            for(let i in json){
                let day = json[i];
                if(day.userId == userId){
                    userAvailability.push(day)
                }
            }
            setData(userAvailability)
        }
        fetchData()
    }, [userId])
    return (
        <div>
            <h1 className="p-3 content-headers">Beschikbaarheid</h1>
            <div className="p-4 row">
                <div className="col">
                {data ? (
                <div>
                    <AvailabilityItem day="Maandag" availabilityData={getDay("MONDAY", data)}/>
                    <AvailabilityItem day="Dinsdag" availabilityData={getDay("TUESDAY", data)}/>
                    <AvailabilityItem day="Woensdag" availabilityData={getDay("WEDNESDAY", data)}/>
                    <AvailabilityItem day="Donderdag" availabilityData={getDay("THURSDAY", data)}/>
                    <AvailabilityItem day="Vrijdag" availabilityData={getDay("FRIDAY", data)}/>
                </div>
                ) : (
                <div>Loading...</div>
                )}
                </div>
            </div>
        </div>
    );
}

function getDay(day, array){
    for(let i in array){
        if(array[i].weekDay == day){
            return array[i]
        }
    }
    return {
        endTime:  "",
        id: null,
        startTime : "",
        userId: null,
        weekDay: "TUESDAY"}
}

  
  export default Availability;
  