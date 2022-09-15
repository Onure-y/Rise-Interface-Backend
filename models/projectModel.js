const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectTitle: String,
  projectSubtitle: String,
  projectType: String,
  projectTechnology: String,
  projectPlatform : String,
  projectDetails : String,
  projectImagesPath :[String],
});

const ProjectModel = mongoose.model('projects',projectSchema);

module.exports = ProjectModel;
