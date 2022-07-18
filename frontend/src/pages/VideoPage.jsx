import React, {useEffect, useContext} from 'react'
import {useNavigate} from "react-router-dom"
import VideoChat from '../components/VideoChat'
import Controles from '../components/Controles'
import VideoContext from '../context/videoContext'
const VideoPage = () => {
  const navigate = useNavigate()
  const {name} = useContext(VideoContext)
  useEffect(() => {
    if(!name) {
      navigate("/")
    }
  })
  return (
    <>
        <VideoChat />
        <Controles />
    </>
  )
}

export default VideoPage