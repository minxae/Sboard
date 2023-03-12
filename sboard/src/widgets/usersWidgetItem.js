import React, { useState } from "react"
import { LockFill, PersonFill, PersonFillCheck, ShieldLockFill } from "react-bootstrap-icons";


function UsersWidgetItem(prop){
    const [username, setUsername] = useState(prop.user.username)
    const [id, setId] = useState(prop.user.id)
    const [role,  setRole] = useState(prop.user.role)
    const [enabled, setEnabled] = useState(prop.user.enabled);

    return (
        <div className="user row w-100 m-0 mb-1 align-items-center">
            <div className="col">
                <img className='user-img' height="40px" src="/images/default.png"/>
            </div>
            <div className="col text-break">
                {username}
            </div>
            <div className="col text-end">
                {
                    role == "ROLE_ADMIN" ? <PersonFillCheck title="Admin" className="admin-active"/> : <PersonFill  title="Docent"/>
                } 
                
            </div>
            <div className="col text-end">
                {
                    !enabled  && <LockFill title="Geblokkeerd account" />
                }
            </div>
        </div>
    );
}

export default UsersWidgetItem;