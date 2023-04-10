import { useEffect, useState } from "react";
import { Plus } from "react-bootstrap-icons";
import TextSlide from "../widgets/textSlide";
import MediaSlide from "../widgets/mediaSlide";
import "../css/widgets/slideshow.css";
import { createSlideshow, getSlideshows } from "../services/slideshowService";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import RssSlide  from "../widgets/rssSlide"


function Slideshows() {
    const [data, setData]  = useState([]);
    const [selectedSlideshow, setSelectedSlideshow] = useState();
    const [newSlideshowName,setNewSlideshowName] = useState();
    const [isLoading, setIsloading] = useState(false);

    const addSlideshow = async () => {
        const response = await createSlideshow({newSlideshowName});
        if(response.status == 201){
            const newItem = {"id" : newSlideshowName};
            const newArray = [newItem, ...data]
            //Cant create slideshow because must have screenId
            setData(newArray)
            toast.success(newSlideshowName + " toegevoegd! 🎉")
        }else {
            toast.error("Iets gaat niet helemaal voolgens plan!")
        }
        
    }
    
    useEffect(() => {
        const loadSlideshows = async () => {
            setIsloading(true)
            const response = await getSlideshows();
            if(response.status == 200){
                const json = await response.json();
                setData([...json])
                setIsloading(false);
            }
        }
        loadSlideshows();
    }, [])
    
    return (
        <div>
            <h1 className="p-3 content-headers">Slideshow manager</h1>
            <div className="p-4 row">
                <div  className="col-md-6">
                    <div className="dashboard-widget">
                        All slideshows and add name for creation of new slide show
                        Selected <b>{selectedSlideshow}</b>
                        <hr></hr>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" onChange={(e) => setNewSlideshowName(e.target.value)} placeholder="Slideshow naam" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button onClick={() => addSlideshow()} className="btn btn-outline-primary" type="button" id="button-addon2"><Plus/> Toevoegen</button>
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
                            data.map((item, index) => (
                                <div className="slideshowListItem" onClick={() => setSelectedSlideshow(item.id)} key={index}>
                                    <div  className="row h-100 align-items-center">
                                        <h5 className="m-0">{item.name}</h5>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
                
                <div  className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <TextSlide slideShowId={selectedSlideshow}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <MediaSlide slideShowId={selectedSlideshow}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <RssSlide/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Slideshows;
  