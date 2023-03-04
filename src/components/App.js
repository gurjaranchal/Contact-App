import React ,{useEffect, useState}from 'react';
import './App.css';
import {uuid} from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const st_key;
  const getLocalData=()=>{
    const lists=localStorage.getItem('contacts');
  
    if(lists)
    {
      return JSON.parse(lists);
    }else{
      return [];
    }
  };

//     const cs=[
//     {
//     id:"1",
//     name:"Anchal",
//     email:"ndhskja@gmail.com",
//   },
//   {
//     id:"2",
//     name:"Anchalds",
//     email:"ndhskja@gmail.com",
//   },
//   {
//     id:"3",
//     name:"Anchaldfs",
//     email:"ndhskja@gmail.com",
//   },
// ];
// useState(cs);
   const [contacts,setcontact]= useState(getLocalData());
   const addHandler = (c)=>{
    console.log(c);
    const id= new Date().getTime().toString();
    setcontact([...contacts,{id,...c}]);
   };

   const removeHandler=(id)=>{
    const newCL =contacts.filter((c)=>{
      return c.id !== id;
    });
    setcontact(newCL);
   };
  



 

   useEffect(()=>{
    window.localStorage.setItem('contacts',JSON.stringify(contacts));
   },[contacts]);

  return (
    <div className='ui contanier'>
      <Header />
      <AddContact addHandler={addHandler}/>
      <ContactList contacts={contacts} getCI={removeHandler}/>
    </div>
  );
}

export default App;


  
//   const contacts=[
//     {
//     id:"1",
//     name:"Anchal",
//     email:"ndhskja@gmail.com",
//   },
//   {
//     id:"2",
//     name:"Anchal",
//     email:"ndhskja@gmail.com",
//   },
//   {
//     id:"3",
//     name:"Anchal",
//     email:"ndhskja@gmail.com",
//   },
// ];

  //  useEffect(()=>{
  //  const retriveC= window.localStorage.getItem('contacts');
  //  if(retriveC)setcontact(JSON.parse(retriveC));
  //  },[]);