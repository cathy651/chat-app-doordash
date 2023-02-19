
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";

import Nav from '../../components/Nav'
import ChatRoom from '../../components/ChatRoom'

import './MainDashboard.css'

const MainDashboard = () => {
  const { userName, setUserName } = useContext(AppContext);
  
  return (
    <>
     <>welcome {userName}</>
      <Nav />
      <ChatRoom />
    </>
  )
}

export default MainDashboard