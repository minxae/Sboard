import React, { useEffect, useState } from 'react'
import '../css/widgets/usersCreation.css'
import { addUser } from '../services/userService';
import {TailSpin} from "react-loader-spinner"
import { toast } from 'react-toastify';


function UsersCreation() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [enabled, setEnabled] = useState(true);
    const [role, setRole] = useState("ROLE_DOCENT")
    const [errorMessage, setErrorMessage] = useState(false)

    const [isLoading, setIsLoading] = useState(false);
    
    const createUser = async () => {
        console.log(username, password, role, enabled)
        if(username && password && role){
            setIsLoading(true)
            let response = await addUser({username, password, role, enabled})
            setIsLoading(false)
            if(response.status  == 201){
                toast.success("Welcome " + username + ", gebruiker aangemaakt!");
            }else {
                toast.warning("OEPS! Het lijkt erop dat deze gebruiker al bestaat!");
            }
        }else {
            setErrorMessage(true);
            setTimeout(() => {
                setErrorMessage(false)
            },5000)
        }
    }

    return (
        <div className='users w-100 dashboard-widget m-0 h-100'>
            <h5>Toevoegen</h5>
            <p>Voeg hieronder een nieuwe gebruiker toe.</p>
            <hr></hr>
            {
                errorMessage &&
                <div className="alert alert-warning test" role="alert">
                    Vergeet niet alle velden in te vullen 🤗
                </div>
            }
            <div className="form-group mb-3">
                <input onChange={(e) =>{setUsername(e.target.value)}} type="text" className="form-control" placeholder={"Gebruikersnaam"}/>
            </div>
            <div className="form-group mb-3">
                <input onChange={(e) =>{setPassword(e.target.value)}} type="password" className="form-control" placeholder={"Wachtwoord"}/>
            </div>
            <div className="form-group mb-3 c-p">
                <select onChange={(e) => {setRole(e.target.value)}} className="form-control" id="role"  placeholder='Role'>
                    <option value="ROLE_DOCENT">Docent</option>
                    <option value="ROLE_ADMIN">Admin</option>
                    <option value="ROLE_SCREEN">Screen</option>
                </select>
            </div>
            <div className="form-check mb-3 c-p">
                <input onChange={(e) => {setEnabled(!enabled)}} checked={enabled} type="checkbox" className="form-check-input" id="enabled"/>
                <label className="form-check-label" htmlFor="enabled">Actief</label>
            </div>
            <button onClick={() => createUser()} className="btn btn-primary add">
                <div className='d-flex'>
                    {
                        isLoading &&
                        <TailSpin
                            height="20"
                            width="20"
                            color="white"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass="justify-content-center pe-2"
                            visible={true}
                        />
                    }
                    <p className='m-0'>Toevoegen</p>
                </div>
                
            </button>
            
        </div>
    );
  }
  
  export default UsersCreation;
  