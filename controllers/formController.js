const FormModel = require("../models/formModel");

exports.createClientForm = async (req, res) => {
    const newForm = new FormModel({
        clientMail : req.body.clientMail,
        clientFullName: req.body.clientFullName,
        clientTelephoneNumber: req.body.clientTelephoneNumber,
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