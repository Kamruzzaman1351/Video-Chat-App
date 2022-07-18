import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import VideoContext from "../context/videoContext"
const LobbyPage = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const {setName} = useContext(VideoContext)
    const onSubmit = (e) => {
        e.preventDefault()
        setName(userName)
        navigate("/room")
        
    }
  return (
    <div className="lobby">
        <main id="lobby-container">
            <div id="form-container">
                <div id="form__container__header">
                    <p><span role="img" aria-labelledby='jsx-a11y/accessible-emoji'>👋 </span>Enter Your Name & Join a Room</p>
                </div>

                <div id="form__content__wrapper">
                    <form id="join-form" onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            name="invite_link" 
                            required
                            value={userName}
                            onChange={(e)=> setUserName(e.target.value)} 
                            placeholder="Your Name"    
                        />
                        <input type="submit" value="Join Room" />
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default LobbyPage