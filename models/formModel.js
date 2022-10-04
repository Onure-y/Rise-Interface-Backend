const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    clientMail : String,
    clientFullName: String,
    clientTelephoneNumber:String,
    clientDemoCode : String,
    clientTime : Number,
});

const FormModel = mongoose.model('clients',formSchema);

module.exports = FormModel;