import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "../css/pages/screenSelection.css"
import { getScreens } from "../services/screenService";
import ScreenItem from "../widgets/screenItem";

function ScreenSelection() {
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
        <div className='container-fluid wrapper wrapper-img'>
            <ToastContainer/>
            <div className='row h-100 align-items-center text-center'>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <h1>Schermen</h1>
                    <p className="text-muted">Selecteer het <b>scherm</b> waar uw op het momenent bent ingelogd.</p>
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
                    <div className=''>
                        {
                            Object.keys(data).map((key) => <ScreenItem  key={key} data={data[key]}/>)
                        }
                    </div>
            }
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
  }
  
  export default ScreenSelection;