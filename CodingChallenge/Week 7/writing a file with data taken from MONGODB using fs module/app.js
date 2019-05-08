"use strict";

const express = require("express");

const mongo = require("mongodb");

const fs = require("fs");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());






// Create a Mongo client
let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/library", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    if (error) {
        console.log("Error connecting to the database.");
    } else {
        console.log("DB connection established.");
        let DB = mongoClient.db("library");


          DB.collection("books").find({}).toArray(function(error, books) {
          
              if (error) {
                  console.log("error occured while connecting to instructors collection");
              } else {
                  
                let bookData = JSON.stringify(books);

                fs.writeFile('books.json', bookData, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved');
                  });
                 

                 
              }
          
          });

       

    }
});





app.listen(8080);