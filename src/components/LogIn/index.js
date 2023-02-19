import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import './LogIn.css'

const LogIn = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [ curInput, setCurInput ] = useState('');

  const handleSubmit = () => {
    setUserName(curInput);
  }

  return (
    <div className='main-container'>
      <form className='form-container'>
        <input 
          className='input-box' 
          type="text" 
          onChange={e => setCurInput(e.target.value)}
          placeholder='Your Name'
          name='name'
        />
      
        <button 
          className='btn'
          onClick={handleSubmit}
        >join us</button>
      </form>
    </div>
  )
}

export default LogIn