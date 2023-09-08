import React from 'react'
import Header from '../Components/Header/Header';
import Sidebar from './SideBar'

const SingleMsg = (props) => {
    console.log("propsSi",props)
  return (
    <div>
<Header/>
<Sidebar items={props}/>
    </div>
  )
}

export default SingleMsg