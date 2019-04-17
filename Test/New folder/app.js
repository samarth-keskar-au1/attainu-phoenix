"use strict";

const express = require("express");

const bodyParser = require("body-parser");

const mongo = require("mongodb");

const multiparty = require("multiparty");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

let DB;
let mongoClient = new mongo.MongoClient("mongodb://127.0.0.1:27017/gallery", { useNewUrlParser: true });
mongoClient.connect(function(error) {

    if (error) {
        console.log("error connecting to the db");
        return;
    } else {
        console.log("db successfully connected");
        DB = mongoClient.db("gallery");
    }

});




app.get("/", function(req, res) {
    res.render("gallery.hbs");
});

app.post('/', (req, res) => {
    let data = {
        title: req.body.title,
    };

    // Receive the upload data
    var fileUpload = new multiparty.Form({
        autoFiles: true,
        uploadDir: "public"
    });
    fileUpload.parse(req, function(error, fields, files) {
        data.originalFileName = files.video[0].originalFilename;
        data.video = files.video[0].path.split("/")[1];


        console.log(data);
        console.log(files);

        // Code for saving data
        DB.collection("pictures").insertOne(data, function(error, dataInserted) {

            if (error) {
                res.send("error inserting data into the DB");
                return;
            }

            res.redirect("/");
        });

    });
});


app.listen(3000);