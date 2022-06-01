const express = require("express");
const mongoose = require("mongoose");
const UserModel = require('./models/userModel.js');
// const userRoutes = require("./routes/userRoutes.js");
const app = express();

app.use(express.json());
// app.use(userRoutes()); 

const port = 3000;
const dbUri =
  "mongodb+srv://Onure:ts2001emre@example-server.bvu3f.mongodb.net/RiseInterface?retryWrites=true&w=majority";

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con => {
  console.log('Database connection sucsessfull');
})


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


app.get("/users", async (req,res) => {
    const users =  await UserModel.find({});

    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/", (req, res) => {
  res.status(200).send("Hello From server");
});

app.post("/", (req, res) => {
  res.send("post func is working...");
});

app.post("/createUser", (req,res) => {
  res.status(200).send('sucsess');

  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email : req.body.email,
    job: req.body.job
  })

  newUser.save().then(() => {
    console.log('sucsess');
  }).catch(err => {
    console.log("Error ! = ",err);
  })
});


app.listen(port, () => {
  console.log(`Server started at 3000 port`);
});
