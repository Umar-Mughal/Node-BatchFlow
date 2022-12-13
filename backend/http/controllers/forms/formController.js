const fs = require("fs");
const path = require("path");
//const socket = require("../../../socket");

const saveCreditForm = async (req, res) => {
  try {
    const { formData, fileName, formName } = req.body;
    const formDataKeys = Object.keys(formData).join(",");
    const formDataValues = Object.values(formData).join(",");
    let formTxtData = `${formDataKeys}\n${formDataValues}`;

    const filePath = path.resolve(`backend/forms_data/${fileName}`);

    const runBatchProcess = require(`../../../forms_data/${formName}/batch_scripts/executeBatchFile`);

    fs.writeFileSync(filePath, formTxtData);
    res.status(201).json({
      statusCode: 201,
      status: "success",
    });

    let testing = process.env.BATCH_TEST;
    if (testing === 'true') {
      setTimeout(() => {
        fs.writeFileSync(
          path.resolve(`./backend/forms_data/${formName}/status.txt`),
          "1"
        );
        setTimeout(() => {
          fs.writeFileSync(
            path.resolve(`./backend/forms_data/${formName}/status.txt`),
            "2"
          );
          setTimeout(() => {
            fs.writeFileSync(
                path.resolve(`./backend/forms_data/${formName}/status.txt`),
                "3"
            );
          }, 3000);
        }, 3000);
      }, 1000);
    } else runBatchProcess();
    return;
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const downloadFiles = async (req, res) => {
  try {
    const { type, fileName } = req.params;
    const e = path.resolve(
      __dirname + `../../../../forms_data/${type}/results/` + fileName
    );
    res.download(e);
    return res;
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "File not found, please try again",
    });
  }
};

module.exports = {
  saveCreditForm,
  downloadFiles,
};
