"use strict";

const express = require("express");

const bodyParser = require("body-parser");

const mongo = require("mongodb");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static("public"));

let DB;

// Create a Mongo client
let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", {
    useNewUrlParser: true
});
mongoClient.connect(function(error) {
    (error) ? console.log("Error connecting to the database."): DB = mongoClient.db("library");
});


app.get('/', (req, res) => {
    res.render("index.hbs");
});

app.post('/', (req, res) => {

    let query = {
        language: req.body.language
    }
    DB.collection("books").find(query).toArray(function(error, books) {

        if (error) {
            console.log("error occured while connecting to collection");
        } else {
            let searchBooks = {
                books: books
            };


            res.render("search.hbs", searchBooks);
        }

    });
});







app.listen(8080);