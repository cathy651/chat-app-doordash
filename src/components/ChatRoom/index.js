import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getUsersInARoom } from "../../utils/APIs"

import ChatBox from "./ChatBox"
import './ChatRoom.css'

const ChatRoom = () => {
  const [ selectedRoomInfo, setSelectedRoomInfo ] = useState(null);
  // const { id: selectedId } = useParams();
  const selectedRoom = useParams();
  const selectedId = selectedRoom.id;
  useEffect(() => {
    if(selectedId) {
      getUsersInARoom(selectedId)
        .then(data => setSelectedRoomInfo(data))
        .catch(error => error)
    }
  }, [selectedId]);

  return (
    <div>
      {selectedId ?
        <div className="chat-container">
          <div className="room-info">
            {selectedRoomInfo?.name}
            <div className="user-name" >
              { selectedRoomInfo?.users?.map((user, index)=>(<div> {user} , </div>)) }
            </div>
          </div>
          <div className="chat-box"><ChatBox roomId={selectedId}/></div>
        </div>
        :
        <div>choose a room</div>
      }
    </div>
  )
}

export default ChatRoom