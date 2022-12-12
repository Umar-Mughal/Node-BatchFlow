const path = require("path");
const isOnWindow = process.platform === "win32";
const childProcess = require("child_process");
const batFile = path.resolve(
  "./backend/forms_data/pain13/batch_scripts/batch.bat"
);

const runBatchProcess = () => {
  return new Promise((res, rej) => {
    let batRun = "";
    if (isOnWindow) {
      batRun = childProcess.spawn(
        "cmd.exe",
        ["/c", "/ui/backend/forms_data/pain13/batch_scripts/batch.bat"],
        { env: process.env }
      );
    } else {
      batRun = childProcess.spawn("/bin/bash", [`${batFile}`], {
        env: process.env,
      });
    }
    batRun.stdout.on("data", function (data) {
      console.log("stdout: " + data);
      res(data);
    });
    batRun.stderr.on("data", function (data) {
      console.log("stderr: " + data);
      rej(data);
    });
  });
};

module.exports = runBatchProcess;
