// Packages
const express = require("express");
// Controllers
const formController = require("../http/controllers/forms/formController");

const router = express.Router();

router.route("/save").post(formController.saveCreditForm);

router.get("/download/:type/:fileName", formController.downloadFiles);

module.exports = router;
