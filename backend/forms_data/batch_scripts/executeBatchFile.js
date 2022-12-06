const path = require('path')
const childProcess = require("child_process");
const batFile = path.resolve('backend/forms_data/batch_scripts/batch.bat')

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

module.exports = runBatchProcess
