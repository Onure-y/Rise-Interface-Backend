const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");
const projectRouter = require("./routes/projectsRoutes.js");
const formRoutes = require("./routes/formRoutes.js");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const dbUri =
  "mongodb+srv://Onure:ts2001emre@example-server.bvu3f.mongodb.net/RiseInterface?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Database connection sucsessfull");
  });

// Creating new User dataScheme example

// const testUser = new UserModel({
//   firstName : 'Kado',
//   lastName : 'Aydin',
//   email : 'asdasdads@gmail.com',
//   job : 'tupcu',
// });

// testUser.save().then(doc => {
//   console.log(doc);
// }).catch(err => {
//   console.log(err);
// })

// app.get("/users", );

// app.post("/createUser",);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/forms",formRoutes);

module.exports = app;
