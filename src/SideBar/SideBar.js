import {useEffect, useState} from "react";
import classes from "./SideBar.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button} from "react-bootstrap";
const Sidebar = ( ) => {

  const emails= useSelector(state=> state.inbox)
  const [unreadcount,setUnreadCount]=useState(0)
  const history = useHistory();

  const composeMailHandler = () => {
    history.push("/composemail");
  };
  const getMailHandler = () => {
    history.push("/displaymail");
  };
  const inboxHandler=()=>{
    history.push("/inboxdisplay")
  }
useEffect(()=>{
if(emails){
  let count=0;
  Object.keys(emails.emails).map((email) => {
    if (emails.emails[email].seen === false) {
      count = count + 1;
      setUnreadCount(count)
    }
    
  })
}
},[emails])

  
  const logoutHandler=()=>{
    localStorage.clear();
    history.replace('/authform')
}

  return (
    <div className={classes.sidebar}> 
      <div className={classes.compose}> 
        <Button onClick={composeMailHandler}>
          Compose
        </Button>
        </div>
        <div className={classes.compose}> 
        <Button onClick={inboxHandler}>
        Inbox <br/>
        ({unreadcount} unread)
        </Button>
        </div>
        <div className={classes.compose}> 
        <Button onClick={getMailHandler}>
          Sent Mail
        </Button> 
      </div>
      <div className={classes.compose}>
        <div className={classes.logout}>
      <Button onClick={logoutHandler}>Logout</Button>
      </div>
      </div> 
      </div>
      
   
  );
};

export default Sidebar;