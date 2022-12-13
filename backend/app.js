// Packages
const express = require("express");
let cors = require("cors");
// Routers
const formRouter = require("./routes/formRoutes");
const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");
const http = require("http");
const {Server} = require("socket.io");
// Sockets
const {progressBarSocket} = require('./sockets/sockets')

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: "*",
});
// Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());

// Routes
app.use("/api/v1/forms", formRouter);
// Sockets
progressBarSocket(io)

module.exports = server;
