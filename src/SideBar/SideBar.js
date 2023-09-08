import React from "react";
import classes from "./SideBar.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button} from "react-bootstrap";

const Sidebar = (props) => {
  const inboxItems= useSelector(state=> state.inbox.emails)

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

  let totalUnread = 0;
  inboxItems.map((item)=>
  item.seen? totalUnread++ : ''
  )

  
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
        Inbox {totalUnread}
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