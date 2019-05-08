"use strict";

const express = require("express");

const router = express.Router();

const mongo = require("mongodb");

let DB;

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log(error): DB = mongoClient.db("blog");
});

router.get('/', (req, res) => {
    let loginData = {};
    if (req.query.failed) {
        loginData.failed = true;
    } else if (req.query.success) {
        loginData.success = true;
    }
    res.render("login.hbs", loginData);
});


router.post('/', (req, res) => {

    let userInput = { email: req.body.email, password: req.body.pas };

    DB.collection("users").findOne(userInput, function(error, users) {

        if (error) {
            return console.log(error);
        }

        (!users) ? res.redirect(`/login?failed=true`): res.redirect(`/login?success=true`);


    });
});

module.exports = router;
