
import { useState, useEffect } from "react";
import { getMessages } from "../../utils/APIs";
import './ChatBox.css'

const ChatBox = ({roomId}) => {
  const [ messages, setMessages ] = useState(null);
  useEffect(()=> {
    getMessages(roomId)
    .then(data => setMessages(data))
    .catch(error => error)
  },[roomId])
  
  return (
    <div>
      {messages?.map((message, index)=>{
        return (
        <div key={index} className='message-container'>
          <div className="user-name">{message.name}</div>
          <div className="message">{message.message}</div>
        </div>)
      })}
    </div>
  )
}

export default ChatBox