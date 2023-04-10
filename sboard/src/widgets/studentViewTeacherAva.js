import { CaretRightFill } from "react-bootstrap-icons";
import StudentViewTeacherItem from "./studentViewTeacherItem";
import { useEffect, useState } from "react";
import { getAvailability } from "../services/availabilityService";
import {calculateTodaysAvailibilty} from "../utils";
import { TailSpin } from "react-loader-spinner";

function StudentViewTeacherAva() {
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(true);
    useEffect(() =>{
        const getTeachersAva = async() => {
            const response = await getAvailability();
            if(response.status == 200){
                const json = await response.json();
                const filtered = calculateTodaysAvailibilty(json);
                setData(filtered)
                setIsloading(false)
            }
        }

        getTeachersAva();
    }, [])
    return  (
        <div className="row sboard-widget h-100 p-3">
            <div className="col-md">
                <div className="row sb-head">
                    <div className="col-md">
                        <h1 className="sboard-header-student"><CaretRightFill/> Docenten</h1>
                    </div>
                </div>
                <div className="row sb-bottom p-3">
                    <div className="col-md teacher-ava-items">
                        {
                            isLoading
                            ?
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
                            :
                            data.map((item, index) => (
                                <StudentViewTeacherItem userId={item.userId} key={index}/>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default StudentViewTeacherAva;

