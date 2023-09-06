const express = require('express')

const io = require('socket.io')({
    path: `/webrtc`
});

const app = express();

const port = 8081;
app.get('/', (req, res) => res.send('Hello, Web, rtc'));

const server = app.listen(port, () => {
    console.log(`WebRTC is listenning on port ${port}`);
});

io.listen(server);

const webRTCNamespace = io.of('webRTCPeers');

webRTCNamespace.on('connection', socket => {
    console.log(socket.id);

    socket.emit('connection-success', {
        status: 'connection-success',
        socketId: socket.id,
    });

    socket.on('disconect', () => {
        console.log(`${socket.id} has disconnected.`);
    });

    //socket get the sdp on the client
    socket.on('sdp', data => {
        console.log(data);
        socket.broadcast.emit('sdp', data);
    })

    //create function add candicate
    socket.on('candicate', data => {
        console.log(data);
        socket.broadcast.emit('candicate', data);
    });
})