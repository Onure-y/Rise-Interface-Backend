const FormModel = require("../models/formModel");

exports.createClientForm = async (req, res) => {
    var randomDemoValue = Math.floor(Math.random() * 1000000) 
    const newForm = new FormModel({
        clientMail : req.body.clientMail,
        clientFullName: req.body.clientFullName,
        clientTelephoneNumber: req.body.clientTelephoneNumber,
        clientDemoCode : randomDemoValue,
    });

    newForm.save().then(() => {
        console.log("sucsess");
        res.status(200).send("sucsess");
    }).catch(err => {
        res.status(500).send(err);
        console.log("Error! = ", err);
    });
}

exports.getAllForms = async (req,res) => {
    const allForms = await FormModel.find({});

    try {
        res.status(200).send(allForms);
    }
    catch(err) {
        res.status(500).send(err);
    }
}

exports.getUserDemoCode = async (req, res) => {
    // console.log(req.params.userFullName)
    FormModel.findOne({ clientFullName : req.params.userFullName}, function (err, client) {


        res.status(200).send(client.clientDemoCode);
    });
}