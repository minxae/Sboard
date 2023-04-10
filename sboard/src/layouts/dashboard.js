import { InfoCircle } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import AvailabilityStatus from "../widgets/availabilityStatus";
import AvailableDays from "../widgets/availableDays";
import SlideShowTotal from "../widgets/slideShowTotal";
import ScreenTotal from "../widgets/screensAndTotal";

function Dashboard() {
    const {username} = useSelector((state) => state.user)
    return (
        <div>
            <h1 className="p-3 content-headers">Dashboard</h1>
            <div className="alert ms-4 me-4 alert-info" role="alert">
                <InfoCircle/> {getGreeting()}<b> { username}</b>, vergeet niet uw beschikbaarheid door te geven voor de studenten! 😉
            </div>
            <div className="p-4 row">
                <div className="col-md-6">

                    <AvailabilityStatus />

                </div>
                <div className="col-md-6">
                    <AvailableDays />
                </div>
                <div className="col-md-6">
                    <SlideShowTotal />
                </div>
                <div className="col-md-6">
                    <ScreenTotal />
                </div>
            </div>
        </div>
    );
  }

  function getGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Goedemorgen";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Goedemiddag";
    } else {
      greeting = "Goedeavond";
    }
  
    return greeting;
  }

  
  export default Dashboard;
  