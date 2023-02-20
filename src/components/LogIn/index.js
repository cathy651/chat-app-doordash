import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext";
import './LogIn.css'

const LogIn = () => {
  const { setUserName } = useContext(AppContext);
  const [ curInput, setCurInput ] = useState('');
  const [ showLogIn, setShowLogIn ] = useState(true);

  const handleSubmit = () => {
    setUserName(curInput);
    setShowLogIn(false);
  }

  return (
    <>
    {
      showLogIn?
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
      :
      null
    }
    </>
    
  )
}

export default LogIn