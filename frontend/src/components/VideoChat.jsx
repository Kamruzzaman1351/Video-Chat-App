import React from 'react'

const VideoChat = () => {
  return (
    <div>
        <div id="videos">
            <video className="video-player smallFrame" id="user-1" autoPlay playsInline></video>
            <video className="video-player" id="user-2" autoPlay playsInline></video>
        </div>
    </div>
  )
}

export default VideoChat