import { Plus } from "react-bootstrap-icons";

function MediaSlide() {
    return  (
        <div className="dashboard-widget">
        <h5><Plus/>Media bericht</h5>
        <p>Voeg hier uw <b>media</b> bericht toe aan een bestaande slide show. * Een tekst bericht geeft alleen een melding van tekst weer voor de studenten.</p>
        <hr></hr>
        <div className="form-group mb-3">
            <input type="text" className="form-control" placeholder={"Onderwerp"}/>
        </div>
        <div className="form-group mb-3">
            <textarea  type="text" className="form-control" placeholder={"Omschrijving"}/>
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Upload</label>
            <input class="form-control" type="file" id="formFile"/>
        </div>
        <button className="btn btn-primary add">
            <div className='d-flex'>
                <p className='m-0'>Toevoegen</p>
            </div>   
        </button>
    </div>
    )
}

export default MediaSlide;
