import { useEffect, useState } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
import { getUser } from "../services/userService";
import { TailSpin } from "react-loader-spinner";


function StudentViewTeacherItem(prop) {
    const [isLoading,  setIsloading] =  useState(true);
    const [username, setUsername] = useState("Loading");
    useEffect(()=>{
        const getUserForItem = async () => {
            const response = await getUser(prop.userId)
            if(response.status == 200){
                const json = await response.json();
                setUsername(json.username);
                setIsloading(false)
            }
        }
        
        getUserForItem();
    }, [])
    return  (
        <div className="row teacher-ava-item align-items-center p-4">
            <div className="col-md-2">
                <img className='user-img' width="100%" src="/images/default.png"/>
            </div>
            <div className="col-md-7 text-break">
                <h5 className="m-0">{
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
                username
                }</h5>
            </div>
            <div className="col-md-3">
                <span className="badge badge-primary badge-sboard">Beschikbaar</span>
            </div>
        </div>
    )
}

export default StudentViewTeacherItem;

