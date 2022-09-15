const express = require("express");
const projectController = require("../controllers/projectController.js");

const router = express.Router();

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.createProject);

router.route("/:id").get(projectController.getProjectById)

module.exports = router;
