import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import VideoPage from "./pages/VideoPage"
import LobbyPage from "./pages/LobbyPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<VideoPage />} />
        <Route path="/" element={<LobbyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
