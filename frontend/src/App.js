import io from "socket.io-client"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import VideoPage from "./pages/VideoPage"
import LobbyPage from "./pages/LobbyPage"
const socket = io("http://localhost:8000")
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
