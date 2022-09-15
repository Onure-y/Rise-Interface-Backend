const express = require("express");
const formController = require("../controllers/formController.js");

const router = express.Router();

router.route("/")
    .get(formController.getAllForms)
    .post(formController.createClientForm);

module.exports = router;