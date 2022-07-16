import io from "socket.io-client"

const socket = io("http://localhost:8000")
function App() {
  return (
    <>
      <h1>Welcome To Video Chat App</h1>
    </>
  );
}

export default App;
