const fs = require('fs')
const path = require('path')
const runBatchProcess = require("../../../forms_data/batch_scripts/executeBatchFile");

const saveCreditForm = async (req, res) => {
  try {

    const { formData, fileName } = req.body
    const formDataKeys = Object.keys(formData).join(",");
    const formDataValues = Object.values(formData).join(",");
    let formTxtData = `${formDataKeys}\n${formDataValues}`

    const filePath = path.resolve(`backend/forms_data/${fileName}`)

    fs.writeFile(filePath, formTxtData, (err) => {
      if (err) throw err;
      runBatchProcess();
      console.log("Aaaah, file write is succesful")
      res.status(201).json({
        statusCode: 201,
        status: 'success'
      });
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  saveCreditForm,
};
