import React from "react";
import ContactCard from "./ContactCard";

const ContactList=(p)=>{
    // console.log(p);
    const deleteHandler = (id) =>{
        p.getCI(id);
    };
    const renderCL =p.contacts.map((c) => {
        return <ContactCard c={c} clickHandler={deleteHandler} key={c.id}/>;
       
    });
    return(
        <div className="ui list celled">
            {renderCL}
        </div>
    )
};
export default ContactList;