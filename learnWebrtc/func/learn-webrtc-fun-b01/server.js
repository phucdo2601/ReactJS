const express = require('express')

const io = require('socket.io')({
    path: `/webrtc`
})