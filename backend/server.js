const express = require("express")
const path = require("path")
const {createServer} = require("http")
const {Server} = require("socket.io")
const cors = require("cors")
const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 3500

const app = express()
app.use(cors())
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))


// Connecting SocketIO
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)
})

// Serving Frontend

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")))
    app.get("*", (req, res) => {
        res.sendFile(
           path.resolve(__dirname, "../", "frontend", "build", "index.html") 
        )
    })
}

httpServer.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})