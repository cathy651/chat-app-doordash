import { useContext, useEffect, useState } from "react";
import AppContext from '../../contexts/AppContext'
import { getRooms } from "../../utils/APIs";

import './Nav.css'

const Nav = () => {
  const { userName, slectedRoomID, setSelectedRoomID } = useContext(AppContext);
  const [ rooms, setRooms ] = useState(null);
  useEffect(() => {
    getRooms()
      .then(data => {setRooms(data)})
      .catch(error => error)
  },[slectedRoomID]);

  const handleClickRoomName = (e) => {
    setSelectedRoomID(e.target.id);
  }

  return (
    <div>
      <div className="login-Info"><h2>welcome {userName}</h2></div>

      <div className="rooms">
        {
          rooms?.map((room, index) => 
            (<div className="room-name" key={index}>
              <button 
                className="room-btn"
                onClick={handleClickRoomName}
                id={room.id}
                >
                {room.name}
              </button>
            </div>)
          )
        }
      </div>
    </div>
    
  )
}

export default Nav