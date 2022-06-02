const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");

const app = express();

app.use(express.json());

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

module.exports = app;
