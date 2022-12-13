const http  = require('http')
const server  = require('../app')
const { Server } = require ("socket.io")

const io = new Server(server, {
    cors: "*",
});

module.exports = io