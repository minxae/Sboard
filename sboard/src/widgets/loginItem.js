import { useState } from "react"
import { useDispatch } from "react-redux";
import { redirect , useNavigate} from "react-router-dom";
import "../css/widgets/login.css"
import { setUser } from "../redux/user";
import { login } from "../services/sessionService";
import jwt_decode from "jwt-decode"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginItem() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    const [buttonStatus, setButtonStatus] = useState(false);
    const [screenCheck, setScreenCheck] = useState(false);

    const dispatch = useDispatch();
    
    const userSession = async () =>{
        console.log(screenCheck)
        setButtonStatus(true)
        let data = await login(username, password);
        if(data.status == 200){
            toast.success("Inloggen succesvol")
            let jwt = data.headers.get("jwt-token")
            let decodedJwt  = jwt_decode(jwt);
            sessionStorage.setItem('token', jwt)
            dispatch(setUser(decodedJwt))
            screenCheck ?  window.location =  "/Sboard" : window.location = "/"
        }else {
            setButtonStatus(false)
            toast.warn("Gebruikersnaam of wachtwoord incorrect")
        }
    }  
    
    const handleKeyPress = (event) => {
        if(event.key == "Enter"){
            setButtonStatus(true);
            userSession();
        }
    }
    
    return (
      <div className="row h-100 w-100 m-0 align-items-center justify-content-center">
        <div className="col login-item">
            <h1>Welkom terug</h1>
            <p className="muted"><small>Login op het dashboard en ervaar de mogelijkheden van het <b>Sboard</b></small></p>
            <div className="form-group">
                <input type="email" className="form-control" onChange={e => setUsername(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                <small  id="emailHelp" className="form-text text-muted">Voorbeeld: bert@docent.nhlstenden.com</small>
            </div>
            <div className="form-group mb-3">
                <input type="password" onKeyDown={handleKeyPress} className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Wachtwoord"/>
            </div>
            <div className="form-check mb-3 c-p">
                <input onChange={(e) => {setScreenCheck(!screenCheck)}} checked={screenCheck} type="checkbox" className="form-check-input" id="enabled"/>
                <label className="form-check-label" htmlFor="enabled">Go to screens</label>
            </div>
            
            <button onClick={() => userSession()} className={buttonStatus ? "btn btn-primary mt-4 w-100 login-btn buttonPressed" : "btn btn-primary mt-4 w-100 login-btn"}>Login</button>
        </div>
        
      </div>
    );
  }
  export default LoginItem;
  