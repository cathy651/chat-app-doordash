import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import AppContext from '../../contexts/AppContext'
import { getRooms } from "../../utils/APIs";

import './SideBar.css'

const SideBar = () => {
  const { userName } = useContext(AppContext);
  const [ rooms, setRooms ] = useState(null);
 
  useEffect(() => {
    getRooms()
      .then(data => {setRooms(data)})
      .catch(error => error)
  }, [rooms]);


  return (
    <div>
      <div>welcome {userName}</div>
     
      <div className="rooms">
        {
          rooms?.map((room, index) => 
            (<div className="room-name" key={index}>
              <Link to={`/room/${room.id}`}>
                  {room.name}
              </Link>
            </div>)
          )
        }
      </div>
    </div>
  )
}

export default SideBar