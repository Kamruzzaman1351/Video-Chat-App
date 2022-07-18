const videoHandler = (socket) => {
    console.log(`User Connected: ${socket.id}`)
    socket.emit("me", socket.id)
    socket.on("disconnect", () => {
        socket.broadcast.emit("callended")
    })
    socket.on("callUser", ({userToCall, signalData, from, name}) => {
        socket.to(userToCall).emit("callUser", {signal: signalData, from, name})
    })

    socket.on("answerCall", (data) => {

        socket.to(data.to).emit("answerCall", data.signal)
    })
}


module.exports = {videoHandler}