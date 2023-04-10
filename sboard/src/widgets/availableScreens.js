import React, {useEffect, useState} from 'react'
import '../css/widgets/availabilityStatus.css'
import {CheckLg, XLg}  from 'react-bootstrap-icons'
import getUser from '../services/sboardService';
import { getSlideShow } from '../services/slideShowService';



function ScreensTotal() {

    const [count, setCount] = useState();
    useEffect(() => {
        getCount().then((res) => setCount(res))
    },[]);

    return (
        <div className="row">
            <div className="col dashboard-widget">
                <h5>Totaal aantal schermen</h5>
                <p>
                Hieronder worden de totaal aantal schermen die zich in het gebouw bevinden getoond.
                </p>
                <div className='row w-200 m-0 text-center'>
                    <div>
                        {count}
                    </div>
                </div>
            </div>
        </div>
    );
  }

  async function getCount(){
        let data = await getSlideShowTotal();
        return data.length;
  }

  async function getSlideShowTotal(){
    let data = await getSlideShow();
    if(data.status == 200){
        let json = await data.json();
            return json
    }
}
  export default ScreensTotal;
  