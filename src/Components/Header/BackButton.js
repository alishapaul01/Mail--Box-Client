import React from 'react'
import {useHistory} from "react-router-dom"
import classes from './BackButton.module.css'
const BackButton = () => {
    const history=useHistory()

    const backHandler=()=>{
             history.replace("/inboxdisplay");
    }
  return (
    <div className={classes.back}>
        <button onClick={backHandler}>Back</button>
    </div>
  )
}

export default BackButton