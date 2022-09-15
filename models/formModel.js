const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    clientMail : String,
    clientFullName: String,
    clientTelephoneNumber:String,
});

const FormModel = mongoose.model('clients',formSchema);

module.exports = FormModel;