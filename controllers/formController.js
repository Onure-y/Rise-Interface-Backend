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
        res.status(200).send("sucsess");
    }).catch(err => {
        res.status(500).send(err);
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
    FormModel.findOne({ clientMail : req.params.userEmail}, function (err, client) {
        if(client.clientDemoCode != null) {
            res.status(200).send(client.clientDemoCode);
        }
        else {
            res.status(500).send(err);
        }
    });
}