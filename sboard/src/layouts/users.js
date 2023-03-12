import { getUsers } from "../services/userService";
import UsersCreation from "../widgets/usersCreation";
import UsersOverview from "../widgets/usersOverview"

function Users() {
    return (
        <div>
            <h1 className="p-3 content-headers">Gebruikers</h1>
            <div className="p-4 row">
                <div  className="col-md-6">
                    <UsersOverview/>
                </div>
                <div  className="col-md-6">
                    <div className="row">
                        <div className="col">
                            <UsersCreation/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Add a screen 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Users;
  