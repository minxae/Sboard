import React, { Component, useState } from 'react';
import {Tv, CaretRightSquareFill} from "react-bootstrap-icons"

function ScreenItem(prop) {
    const splitUrl = window.location.href.split("/");
    console.log()
    const [title, setTitle] = useState("");
    const [authKey, setAuthKey] = useState("");
    return (
        <div className="row p-4 screenItem align-items-center">
            <div className="col-md-2">
                <Tv/>
            </div>
            <div className="col-md-8">
                <div className='row'>
                    <div className='col-md'>
                        {prop.data.location}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md'>
                        <small className='text-muted text-break'>
                            {prop.data.name}
                        </small>
                    </div>
                </div>
                
            </div>
            <div className="col-md-2 screenArrowIcon">
                {
                    splitUrl[splitUrl.length -1]  == "toevoegen" 
                    &&
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                }
            </div>
        </div>
    );
}

export default ScreenItem;