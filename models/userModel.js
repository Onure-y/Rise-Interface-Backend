const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  job: String,
});

const UserModel = mongoose.model('users',userSchema);

module.exports = UserModel;
