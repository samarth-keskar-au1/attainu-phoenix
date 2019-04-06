"use strict";

const express = require("express");

const router = express.Router();

const mongo = require("mongodb");

let DB;

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log(error): DB = mongoClient.db("blog");
});

router.post('/:mongoId', (req, res) => {

    let object = { _id: mongo.ObjectId(req.params.mongoId) };

    DB.collection("posts").deleteOne(object, function(error, status) {
        res.json({ deleted: true });
    });


});

module.exports = router;
