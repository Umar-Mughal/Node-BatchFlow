import * as path from "path";
const childProcess = require("child_process");
const batFile = path.resolve('./pages/api/batch/bats/batch.bat')

const runBatchProcess = () => {
    return new Promise((res, rej) => {
        const batRun = childProcess.spawn('/bin/bash',
            [`${batFile}`], { env: process.env });

        batRun.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
            res(data)
        });
        batRun.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
            rej(data)
        });
    })
}

export default runBatchProcess
