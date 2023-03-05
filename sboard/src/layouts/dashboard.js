import AvailabilityStatus from "../widgets/availabilityStatus";

function Dashboard() {
    return (
        <div>
            <h1 className="p-3 content-headers">Dashboard</h1>
            <div className="p-4 row">
                <div className="col-md-6">

                    <AvailabilityStatus />

                </div>
                <div className="col-md-6">
                    <AvailabilityStatus />
                </div>
            </div>
        </div>
    );
  }
  
  export default Dashboard;
  