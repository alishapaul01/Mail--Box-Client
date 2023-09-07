import React from "react";
import classes from "./SideBar.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
  inboxItems.forEach((element) => {
    if (!element.seen) {
      totalUnread++;
      
    }

  });

  return (
    <div className={classes.sidebar}>
      <div className={classes.compose}>
        <button onClick={composeMailHandler}>
          Compose
        </button>
        </div>
        <div className={classes.compose}>
        <button onClick={inboxHandler}>
          Inbox {totalUnread}
        </button>
        </div>
        <div className={classes.compose}>
        <button onClick={getMailHandler}>
          Sent Mail
        </button>
        </div>
      </div>
      
   
  );
};

export default Sidebar;