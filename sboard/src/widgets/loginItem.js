import { useState } from "react"
import { useDispatch } from "react-redux";
import { redirect , useNavigate} from "react-router-dom";
import "../css/widgets/login.css"
import { setUser } from "../redux/user";
import { login } from "../services/userService";

function LoginItem() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const dispatch = useDispatch()
    const nav = useNavigate();
    
    const userSession = async () =>{
        let data = await login(username, password);
        const json = await data.json();
        if(data.status == 200){
            setInfoMessage("Success")
            sessionStorage.setItem('token', data.headers.get("jwt-token"))
            dispatch(setUser(json))
            nav("/")
        }else {
            setInfoMessage(json.error)
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
            <div className="form-group">
                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Wachtwoord"/>
            </div>
            <div className="error" role="alert">
                {infoMessage}
            </div>
            
            <button onClick={() => userSession()} className="btn btn-primary mt-4 w-100 login-btn">Login</button>
        </div>
      </div>
    );
  }
  
  export default LoginItem;
  