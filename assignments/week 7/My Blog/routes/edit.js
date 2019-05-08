"use strict";

const express = require("express");

const router = express.Router();

const mongo = require("mongodb");

let DB;

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log(error): DB = mongoClient.db("blog");
});

router.get('/:mongoId', (req, res) => {

    let findThis = { _id: mongo.ObjectId(req.params.mongoId) };

   DB.collection("posts").findOne(findThis, function(error, posts) {

       if (error) {
           return console.log(error);
       }

       if (req.query.postUpdated) {
           posts.postUpdated = true;
       }

       res.render("edit.hbs", posts);

   });

});


router.post('/:mongoId', (req, res) => {

   let whichData = { _id: mongo.ObjectId(req.params.mongoId) };
   let incomingContent = { $set: { title: req.body.title, content: req.body.content } };


   DB.collection("posts").updateOne(whichData, incomingContent, function(error, posts) {

       if (error) {
           return console.log(error);
       }


       res.redirect(`/edit/${req.params.mongoId}?postUpdated=true`)

   });

});

module.exports = router;
