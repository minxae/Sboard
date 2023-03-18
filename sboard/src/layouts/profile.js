import { getUser, updateUser } from "../services/userService";
import "../css/widgets/profile.css"
import { LockFill, PersonFill, PersonFillCheck, UnlockFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

function Profile() {
    const {userId,username} = useSelector((state) => state.user)
    const [role, setRole] = useState("ROLE_DOCENT");
    const [accStatus, setAccStatus] = useState("");
    const [password, setPassword] = useState(null);
    const [oldPass, setOldPass] = useState(null);
    const [isLoading, setIsLoading]  = useState(false);
    
    useEffect(() => {
        const setUser = async() => {
            setIsLoading(true)
            let response = await getUser(userId);
            let json = await response.json();
            setIsLoading(false)
            if(response.status == 200){
                setRole(json.role);
                setAccStatus(json.enabled);
            }

        }
        setUser();
    },[])
    
    const update = async () => {
        if(oldPass && password){
            if(oldPass == password){
                let response = await updateUser({username, password, role, userId});
                console.log(response)
                if(response.status == 200){
                    toast.success("Wachtwoord gewijzigd 🥳");
                }else {
                    toast.warning("OEPS! Daar ging iets fout 😦");
                }
            }else {
                toast.warning("OEPS! Je wachtwoorden moeten wel overeen komen 😦");
            }
        }    
    }
    

    return (
        <div>
            <h1 className="p-3 content-headers">Profiel</h1>
            <div className="p-4 row">
                <div className="col profile">
                    <div className="row">
                        <div className="col p-0 border-7 banner">
                        </div>
                    </div>
                    <div className="row">
                        {
                        isLoading 
                        ? 
                        <TailSpin
                            height="40"
                            width="40"
                            color="#1f9bee"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass="justify-content-center p-4"
                            visible={true}
                        />
                        :
                        <div className="col ps-5 pe-5">
                            <div className="row">
                                <div className="col">
                                    image and name
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row p-4 align-items-center border-bot-p">
                                        <div className="col-md">
                                            <h6>Gebruikersnaam</h6>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <h6>{username}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-4 align-items-center">
                                        <div className="col-md">
                                            <h6>Rol</h6>
                                        </div>
                                        <div className="col-md">
                                            <span className="badge badge-primary border-bot-p" title={role == "ROLE_ADMIN" ? "Admin" : "Docent"}>
                                                {
                                                    role ==  "ROLE_ADMIN"  ? <PersonFillCheck/> : <PersonFill/>
                                                }
                                            </span><br></br>
                                        </div>
                                    </div>
                                    <div className="row p-4 align-items-center border-bot-p">
                                        <div className="col-md">
                                            <h6>Account status</h6>
                                        </div>
                                        <div className="col-md">
                                            <span className={accStatus ? "badge badge-primary acc-en" : "badge badge-primary acc-dis" }>{accStatus ? <UnlockFill/> : <LockFill/>}</span>
                                        </div>
                                    </div>
                                    <div className="row p-4 align-items-center">
                                        <div className="col-md">
                                            <h6>Nieuw wachtwoord</h6>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <input onChange={(e)=>  {setPassword(e.target.value)}} type="password" className="form-control" placeholder={"Nieuw wachtwoord"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-4 align-items-center ">
                                        <div className="col-md">
                                            <h6>Herhaal wachtwoord</h6>
                                        </div>
                                        <div className="col-md">
                                            <div className="form-group">
                                                <input onChange={(e)=>  {setOldPass(e.target.value)}} type="password" className="form-control" placeholder={"Herhaal wachtwoord"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row p-4 align-items-center ">
                                        <div className="col-md text-end">
                                            <button onClick={() => {update();}} className="btn profile-btn">Opslaan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Profile;
  