import React, {useContext} from 'react'
import VideoContext from '../context/videoContext'
const VideoChat = () => {
  const {myVideo, userVideo, me} = useContext(VideoContext)
  return (
    <div>
        <div id="videos">
            <video ref={myVideo} className="video-player smallFrame" id="user-1" autoPlay playsInline></video>
            <video ref={userVideo} className="video-player" id="user-2" autoPlay playsInline></video>
        </div>
    </div>
  )
}

export default VideoChat