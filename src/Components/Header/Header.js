import React from "react";
import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import {Navbar} from 'react-bootstrap'
const Header = () => {
  const id=useSelector((state)=>state.auth.email)
  return (
<>
<Navbar className={classes.heading}>
Welcome to your Mail Box
<br/>
<br/>
{id}@gmail.com
</Navbar>

</>
  );
};

export default Header;