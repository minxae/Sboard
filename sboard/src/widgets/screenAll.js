import React, { Component, useEffect, useState } from 'react';
import {Tv, CaretRightSquareFill} from "react-bootstrap-icons"
import { TailSpin } from 'react-loader-spinner';
import { getScreens } from '../services/screenService';
import ScreenItem from './screenItem';
function ScreenAll() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({})
    useEffect(() => {
        const getItems = async () =>  {
            setIsLoading(true)
            let response = await getScreens();
            if(response.status == 200){
                setIsLoading(false)
                let json = await response.json();
                setData(json)
            }
        }
        getItems();

    }, []);
    return (
        <div className="dashboard-widget">
            <h5>Huidige Schermen</h5>
            <p>Hieronder bevinden zich de huidige schermen, verwijder een scherm of voeg er één toe</p>
            <hr></hr>
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
            <div className='all-screens'>
                {
                    Object.keys(data).map((key) => <ScreenItem  key={key} data={data[key]}/>)
                }
            </div>
            }
            
        </div>
    );
}

export default ScreenAll;