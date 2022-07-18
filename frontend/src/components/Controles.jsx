import React, {useContext, useState} from 'react'
import camera from "../assets/img/camera.png"
import mic from "../assets/img/mic.png"
import phone from "../assets/img/phone.png"
import VideoContext from '../context/videoContext'
const Controles = () => {
    const [idToCall, setIdToCall] = useState("")
    const {callAccepted, callEnded, me, callUser, answerCall, call, } = useContext(VideoContext)
    const onSubmit = (e) => {
        e.preventDefault()
        callUser(idToCall)
    }
  return (
    <div>
        
        <div id="controls">
            {!callAccepted && (
                <div className="callUser">
                    <p>Your CallId: {me}</p>
                    <form onSubmit={onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Call Id" 
                            value={idToCall} 
                            onChange={(e) => {setIdToCall(e.target.value)} }
                        />
                        <input type="submit" value="call" />
                    </form>

                </div>
            )}
            <div className="control-container" id="camera-btn">
                <img src={camera} alt="camera"/>
            </div>
            <div className="control-container" id="mic-btn">
                <img src={mic} alt="microphone" />
            </div>
            {call.isReceivingCall && !callAccepted && (
                <div className="control-container" id="call-btn" onClick={answerCall}>
                    <img src={phone} alt="phone"/>
                </div>
            )}
            {callAccepted && !callEnded && (
                <div className="control-container" id="leave-btn">
                    <img src={phone} alt="phone"/>
                </div>
            )} 
        </div>
    </div>
  )
}

export default Controles