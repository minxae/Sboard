import React, { useEffect, useState } from 'react'
import { Search } from 'react-bootstrap-icons';
import '../css/widgets/usersOverview.css'
import { getUsers } from '../services/userService';
import UsersWidgetItem from './usersWidgetItem';
import {TailSpin} from "react-loader-spinner"


function UsersWidget() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const findUsers = async() => {
            setIsLoading(true);
            let response = await getUsers();
            if(response.status == 200){
                setIsLoading(false);
                let json = await response.json()
                setData(json)
            }
        }
        
        findUsers();
    }, [])

    return (
        <div className='users w-100 dashboard-widget m-0 h-100'>
            <h5>Gebruikers</h5>
            <p>Hieronder ziet uw alle gebruikers van het <b>Sboard</b></p>
            <hr></hr>
            <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder={"Uw favoriete collega 😉"}/>
            </div>
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
                    <div className='all-users-item'>
                        {
                            Object.keys(data).map((key) => <UsersWidgetItem key={key} user={data[key]} />)
                        }
                    </div>
            }
            
        </div>
    );
  }
  
  export default UsersWidget;
  