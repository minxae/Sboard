import React, { Component, useState } from 'react';
import {Tv, CaretRightSquareFill, Plus} from "react-bootstrap-icons"
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { createScreen } from '../services/screenService';
import ScreenItem from './screenItem';

function ScreenAdd() {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState();
    const [tempLocation, setTempLocation] = useState();
    const [physicalLocation, setPhysicalLocation] = useState("EMM");
    const [location, setLocation] = useState();
    const [errorMessage, setErrorMessage] = useState(false);

    const creatingScreen = async () => {
        if(name && tempLocation && physicalLocation){
            setIsLoading(true);
            let response  = await createScreen({location, name});
            setIsLoading(false);
            if(response.status == 201) {
                toast.success("Scherm toegevoegd")
            }else {
                toast.error("Kon scherm niet toevoegen")
            }
        }else {
            setErrorMessage(true)
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000)
        }
    }

    return (
        <div className="dashboard-widget">
            <h5>Scherm toevoegen</h5>
            <p>Voeg hier onder een scherm toe</p>
            <hr></hr>
            {
                errorMessage &&
                <div className="alert alert-warning test" role="alert">
                    Vergeet niet alle velden in te vullen 🤗
                </div>
            }
            <div className="form-group mb-3">
                <input onChange={(e) => {setTempLocation(e.target.value); setLocation(e.target.value + "-" + physicalLocation)}} type="text" className="form-control" placeholder={"Sector - ICT, ECO, HR...."}/>
            </div>
            <div className="form-group mb-3">
                <textarea onChange={(e) => {setName(e.target.value); setLocation(tempLocation + "-" + physicalLocation)}} type="text-area" className="form-control" placeholder={"Overige informatie van scherm"}/>
                <small id="informatie" className="form-text text-muted">Waar staat het scherm precies? Onder de trap? In een lokaal? </small>
            </div>
            <div className="form-group mb-3 c-p">
                <select onChange={(e) => {setPhysicalLocation(e.target.value); setLocation(tempLocation + "-" + e.target.value)}} className="form-control" id="role"  placeholder='Locatie'>
                    <option value="EMM">Emmen</option>
                    <option value="LW">Leeuwarden</option>
                </select>
            </div>
            
            <h6 className='mt-2'>Preview</h6>
            <ScreenItem data={{name, location}}/>

            <button onClick={() => creatingScreen()} className="btn btn-primary add">
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
                    <p className='m-0'>Toevoegen <Plus/></p>
                </div>
                
            </button>
        </div>
    );
}

export default ScreenAdd;