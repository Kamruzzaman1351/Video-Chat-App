import React from 'react'
import camera from "../assets/img/camera.png"
import mic from "../assets/img/mic.png"
import phone from "../assets/img/phone.png"
const Controles = () => {
  return (
    <div>
        <div id="controls">
            <div className="control-container" id="camera-btn">
                <img src={camera} />
            </div>
            <div className="control-container" id="mic-btn">
                <img src={mic} />
            </div>
            <div className="control-container" id="leave-btn">
                <img src={phone} />
            </div>
        </div>
    </div>
  )
}

export default Controles