 import React from "react";
 import user from "../images/user.png";

 const ContactCard = (p) =>{
    const{id,name,email}=p.c;
    
    return(
        <div className="item">
            <img src={user} alt="" className="ui avatar image" />
        <div className="content">
            <div className="header">
               {name} 
            </div>
            <div >
               {email} 
            </div>
        </div>
        <i className="trash alternate outline icon"
        style={{color:"red" ,marginTop:"7px" }}
        onClick={()=>p.clickHandler(id)}>

        </i>
    </div>
    );
 };
 export default ContactCard;