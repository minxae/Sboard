import { Link, Outlet, redirect } from "react-router-dom";
import Login from "../pages/login";

const useAuth  = () =>  {
    // const token = localStorage.getItem('token');
    // console.log("running middleware")
    // console.log(token)
    // if(token){
    //     const decodedToken =  JSON.parse(atob(token.split(".")[1]));
    //     const currentTime  = Date.now() / 1000;
    //     if(decodedToken.exp < currentTime){
    //         return true;
    //     }
    //     return false
    // }
    // return false; 
    return true;
}


function ProtectedRoutes() {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Login />
}


export default ProtectedRoutes;