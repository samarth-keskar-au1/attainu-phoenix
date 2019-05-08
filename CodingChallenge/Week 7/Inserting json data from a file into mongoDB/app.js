"use strict";

const express = require("express");

const mongo = require("mongodb");

const fs = require("fs");

const app = express();







// Create a Mongo client
let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    if (error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        let DB = mongoClient.db("library");


        fs.readFile('./books.json', (err, data) => {
            if (err) {
                return console.log("error occured while reading data");
            }

            let obj = JSON.parse(data);

            DB.collection("books").insertMany(obj, function(error, result) {
                if (error) {
                    return console.log("error occured while inserting data into the collection");
                }

                console.log("data inserted")
            });
        });

    }
});





app.listen(8080);