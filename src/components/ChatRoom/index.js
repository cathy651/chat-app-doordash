import { useContext, useEffect, useState } from "react";
import AppContext from '../../contexts/AppContext'
import { getUsersInARoom } from "../../utils/APIs";

import ChatBox from "./ChatBox";
import './ChatRoom.css'

const ChatRoom = () => {
  const { selectedRoomID } = useContext(AppContext);
  const [ selectedRoomInfo, setSelectedRoomInfo ] = useState(null);

  useEffect(() => {
    if(selectedRoomID) {
      getUsersInARoom(selectedRoomID)
        .then(data => setSelectedRoomInfo(data))
        .catch(error => error)
    }
  },[selectedRoomID]);


  return (
    <div>
      {selectedRoomID?
        <div className="chat-container">
          <div className="room-info">
            {selectedRoomInfo?.name}
            <div className="user-name" >
            {
              selectedRoomInfo?.users?.map((user, index)=>(<div> {user} , </div>))
            }
            </div>
            
          </div>
          
          <div className="chat-box"><ChatBox  roomId={selectedRoomID}/></div>
        
        </div>
        :
        <div>choose a room</div>
      }
    </div>
  )
}

export default ChatRoom