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
    DB.collection("posts").find({}).toArray(function(error, posts) {

        if (error) {
            console.log(error);
        } else {
            let blogPosts = {
                posts: posts
            };

            if (req.query.deleted) {
                blogPosts.deleted = true;
            }

            if (req.query.success) {
                blogPosts.success = true;
            }

            res.render("index.hbs", blogPosts);
        }

    });

});

module.exports = router;
