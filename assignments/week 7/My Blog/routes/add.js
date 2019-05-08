"use strict";

const express = require("express");

const router = express.Router();

const mongo = require("mongodb");

let DB;

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log(error): DB = mongoClient.db("blog");
});

router.get("/", (req, res) => {
    let successData = {};
    if (req.query.success) {
        successData.postAdded = true;
    }
    res.render("add.hbs", successData);
});

router.post("/", (req, res) => {
    let newPost = {
        title: req.body.title,
        content: req.body.content
    }

    DB.collection("posts").insertOne(newPost, function(error, result) {
        if (error) {
            console.log(error);
        }
        res.redirect("/?success=true");
    });
});

module.exports = router;
