
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";

import Nav from '../../components/Nav'
import ChatRoom from '../../components/ChatRoom'

import './MainDashboard.css'

const MainDashboard = () => {
  const { userName, selectedRoomID, setSelectedRoomID } = useContext(AppContext);
  
  return (
    <div className="dashboard-container">
     <div className="left-nav"><Nav /></div>
     <div className="right-chat-box"><ChatRoom /></div>
    </div>
  )
}

export default MainDashboard