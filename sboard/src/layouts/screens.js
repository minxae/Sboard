import { Plus } from "react-bootstrap-icons";
import ScreenAdd from "../widgets/screenAdd";
import ScreenAll from "../widgets/screenAll";

function Screens() {
    return (
        <div>
            <h1 className="p-3 content-headers">Schermen</h1>
            <div className="p-4 row">
                <div  className="col-md-6">
                    <ScreenAll/>
                </div>
                <div  className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <ScreenAdd/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="dashboard-widget">
                                <h5>Huidige slideshows</h5>
                                <p>Hieronder bevinden zich de huidige slideshows klik op een slideshow om hem toe te voegen aan het scherm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Screens;
  