// Packages
const express = require("express");
let cors = require("cors");
const http = require("http");
const chokidar = require("chokidar");
const path = require("path");
const { Server } = require("socket.io");
const fs = require("fs");
// Routers
const formRouter = require("./routes/formRoutes");

const app = express();
// sockets conneciton
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

const options = {
  usePolling: true
}

// credit_transfer
let check_credit = false;
chokidar
  .watch(path.resolve("./backend/forms_data/credit_transfer/status.txt"), options)
  .on("all", (event, p) => {
    if (check_credit) {
      let data = fs.readFileSync(
        path.resolve("./backend/forms_data/credit_transfer/status.txt"),
        "utf-8"
      );
      io.sockets.emit("progress_credit", +data * 50);
      if (data == 2) {
        check_credit = false;
      }
    }
  });

// account
let check_account = false;
chokidar
  .watch(path.resolve("./backend/forms_data/account_verification/status.txt"), options)
  .on("all", (event, p) => {
    if (check_account) {
      let data = fs.readFileSync(
        path.resolve("./backend/forms_data/account_verification/status.txt"),
        "utf-8"
      );
      io.sockets.emit("progress_account", +data * 50);
      if (data == 2) {
        check_account = false;
      }
    }
  });

// pain13
let check_pain13 = false;
chokidar
  .watch(path.resolve("./backend/forms_data/pain13/status.txt"), options)
  .on("all", (event, p) => {
    if (check_pain13) {
      let data = fs.readFileSync(
        path.resolve("./backend/forms_data/pain13/status.txt"),
        "utf-8"
      );
      io.sockets.emit("progress_pain13", +data * 50);
      if (data == 2) {
        check_pain13 = false;
      }
    }
  });

// pain14
let check_pain14 = false;
chokidar
  .watch(path.resolve("./backend/forms_data/pain14/status.txt"), options)
  .on("all", (event, p) => {
    if (check_pain14) {
      let data = fs.readFileSync(
        path.resolve("./backend/forms_data/pain14/status.txt"),
        "utf-8"
      );
      io.sockets.emit("progress_pain14", +data * 50);
      if (data == 2) {
        check_pain14 = false;
      }
    }
  });

// sockets event
io.on("connection", (socket) => {
  socket.on("progress_credit", () => {
    check_credit = true;
  });
  socket.on("progress_pain13", () => {
    check_pain13 = true;
  });
  socket.on("progress_pain14", () => {
    check_pain14 = true;
  });
  socket.on("progress_account", () => {
    check_account = true;
  });
});

module.exports = server;
