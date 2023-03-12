import { ToastContainer } from "react-toastify";
import "../css/pages/sboard.css"
import LoginItem from "../widgets/loginItem"


function Login() {
    return (
        <div className='container-fluid wrapper'>
            <ToastContainer/>
            <div className='row h-100'>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <LoginItem/>
                </div>
                <div className="col-md-4">

                </div>
                
            </div>
        </div>
    );
  }
  
  export default Login;