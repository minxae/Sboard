import {getAvailability} from "../services/availabilityService"
import AvailabilityItem from "../widgets/availabilityItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { InfoCircle } from "react-bootstrap-icons";
import { TailSpin } from "react-loader-spinner";

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
            <div className="alert ms-4 me-4 alert-info" role="alert">
                <InfoCircle/> Vul hieronder uw beschikbaarheid in 🥳
            </div>
        
            <div className="p-4 row">
                <div className="col">
                {data ? (
                <div>
                    <AvailabilityItem day="maandag" availabilityData={getDay("MONDAY", data)}/>
                    <AvailabilityItem day="dinsdag" availabilityData={getDay("TUESDAY", data)}/>
                    <AvailabilityItem day="woensdag" availabilityData={getDay("WEDNESDAY", data)}/>
                    <AvailabilityItem day="donderdag" availabilityData={getDay("THURSDAY", data)}/>
                    <AvailabilityItem day="vrijdag" availabilityData={getDay("FRIDAY", data)}/>
                </div>
                ) : (
                    <TailSpin
                    height="40"
                    width="40"
                    color="#1f9bee"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass="justify-content-center"
                    visible={true}
                />
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
  