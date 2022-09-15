const UserModel = require('../models/userModel.js');

exports.getAllUsers = async (req,res) => {
    const users =  await UserModel.find({});

    try {
        res.send(users);
        console.log('User respond send successfully');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createUser =  (req,res) => {
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
  }