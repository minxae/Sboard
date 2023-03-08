import { Link, Outlet, redirect } from "react-router-dom";
import Login from "../pages/login";

import { setUser } from "../redux/user";
import { useDispatch } from "react-redux";

import jwt_decode from "jwt-decode"

const useAuth  = () =>  {
    if(sessionStorage.getItem("token")){
        let jwt  = sessionStorage.getItem("token")
        return isJwtTokenValid(jwt)
    }
    return false; 
}

function isJwtTokenValid(token) {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    const expDate = jwt_decode(token).exp;
    const currentTime = Math.floor(Date.now() / 1000);
    console.log(expDate, currentTime)  
    if(currentTime >= expDate){
        return false
    }
    return jwtRegex.test(token);
}

function ProtectedRoutes() {
    const isAuth = useAuth();
    const dispatch = useDispatch()

    if(isAuth){
        dispatch(setUser(jwt_decode(sessionStorage.getItem("token"))))
        return <Outlet/>
    }else {
        return <Login/>
    }
}

export default ProtectedRoutes;