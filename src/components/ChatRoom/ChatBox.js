import { useState, useEffect, useContext, } from "react"
import AppContext from '../../contexts/AppContext'

import { getMessages } from "../../utils/APIs"
import './ChatBox.css'

const ChatBox = ({ roomId }) => {
  const { userName } = useContext(AppContext);
  const [ messages, setMessages ] = useState(null);
  const [ newMessage, setNewMessage ] = useState(null);

  useEffect(()=> {
    getMessages(roomId)
    .then(data => setMessages(data))
    .catch(error => error)
  },[roomId])

  // const handleSubmit = () => {
  //   // update messages

  //   // update room info
  // }
  
  return (
    <div>
      {messages?.map((message, index)=>{
        return (
        <div key={index} className='message-container'>
          <div className="user-name">{message.name}</div>
          <div className="message">{message.message}</div>
        </div>)
      })}

      <div>
          <input 
            className='input-box' 
            type="text" 
            onChange={e => setNewMessage(e.target.value)}
            placeholder='send message'
            name='name'
          />
        
          <button 
            className='btn'
            // onClick={handleSubmit}
          >Send</button>
      </div>
    </div>
  )
}

export default ChatBox