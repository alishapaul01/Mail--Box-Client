import React from "react";
import Header from "./Header/Header";
import Sidebar from "../SideBar/SideBar";
import classes from './SentMail.module.css'
import { useSelector } from "react-redux";
import { Container} from "react-bootstrap";
const DisplayMail = (props) => {


  console.log("props", props);
  const loggedInEmail= useSelector(state=>state.auth.email)
  const updatedLoggedInEmail=loggedInEmail

  const deleteHandler= async (id)=>{
   console.log("idSent", id)
   const response= await fetch(`https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}SentMail/${id}.json/`,{
    method:'DELETE'
   })
   if(response.status===200){
   alert('Deleted')
   }

  }
  let display
  if(props.data===0){
    display=<p>SentMail is empty</p>
  }
  else{
  display = props.data.map((item) => (
   
    <ul>
         <Container fluid>
          <li 
          key={item.id}>
          <div className={classes.display}>
          <span className={classes.to}>To:- {item.mail}@gmail.com</span>
          <span className={classes.subject}>{item.subject}</span>
          <span className={classes.text}>{item.text}</span>
          <button onClick={deleteHandler.bind(null,item.id)}>Delete</button>
          </div>   
    </li>
   </Container>
  </ul>

));
}

  return (
    <div>
        <Header/>
        <Sidebar/>
        <div className={classes.heading}>
        Sent Mails
        </div>
        {display}

    </div>
  );
};

export default DisplayMail;