import React from "react";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const id=useSelector((state)=>state.auth.email)
  const history=useHistory()

  const logoutHandler=()=>{
      localStorage.clear();
      history.replace('/authform')
  }
  return (
<>
<header className={classes.header}>
<div className={classes.heading}>Welcome to your Mail Box</div>
{id}@gmail.com
<button onClick={logoutHandler}>Logout </button>
</header>
</>
  );
};

export default Header;