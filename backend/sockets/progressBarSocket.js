const chokidar = require("chokidar");
const path = require("path");
const fs = require("fs");

const progressBarSocket = (io) => {
    const options = {
        usePolling: true
    }

    const statusFlags = {
        credit_transfer: false,
        account_verification: false,
        pain13: false,
        pain14: false
    }

    const getStatus = (status) => {
        switch(status) {
            case 1:
                return 33
            case 2:
                return 66
            case 3:
                return 100
            default:
                return 0
        }
    }

    const checkFileChange = (dirName) => {
        const statusFilePath = `./backend/forms_data/${dirName}/status.txt`
        return chokidar
            .watch(path.resolve(statusFilePath), options)
            .on("all", (event, p) => {
                if (statusFlags[dirName]) {
                    let data = fs.readFileSync(
                        path.resolve(statusFilePath),
                        "utf-8"
                    );
                    io.sockets.emit("progress_credit", getStatus(+data));
                    if (data === '3') {
                        statusFlags[dirName] = false;
                    }
                }
            });
    }

    checkFileChange('credit_transfer')
    checkFileChange('account_verification')
    checkFileChange('pain13')
    checkFileChange('pain14')

    io.on("connection", (socket) => {
        socket.on("progress_credit", () => {
            statusFlags.credit_transfer = true;
        });
        socket.on("progress_pain13", () => {
            statusFlags.pain13 = true;
        });
        socket.on("progress_pain14", () => {
            statusFlags.pain14 = true;
        });
        socket.on("progress_account", () => {
            statusFlags.account_verification = true;
        });
    });
}

module.exports = progressBarSocket