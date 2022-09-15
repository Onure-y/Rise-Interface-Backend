const ProjectModel = require("../models/projectModel");

exports.getAllProjects = async (req, res) => {
  const projects = await ProjectModel.find({});
  try {
    res.status(200).send(projects);
    console.log("All Projects respond send successfully");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getProjectById = async (req, res) => {
  const project = await ProjectModel.findById(req.params.id);
  try {
    res.status(200).send(project);
    console.log("Project found by id and sended successfully");
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};

exports.createProject = (req, res) => {
  res.status(200).send("sucsess");

  const newProject = new ProjectModel({
    projectTitle: req.body.projectTitle,
    projectSubtitle: req.body.projectSubtitle,
    projectType: req.body.projectType,
    projectTechnology: req.body.projectTechnology,
    projectPlatform: req.body.projectPlatform,
    projectDetails: req.body.projectDetails,
    projectImagesPath: req.body.projectImagesPath,
  });

  newProject
    .save()
    .then(() => {
      console.log("sucsess");
    })
    .catch((err) => {
      console.log("Error ! = ", err);
    });
};
