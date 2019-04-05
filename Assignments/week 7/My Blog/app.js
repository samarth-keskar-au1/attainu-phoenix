"use strict";

const express = require("express");

const bodyParser = require("body-parser");

const mongo = require("mongodb");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));




let DB;

// Create a Mongo client
let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log("Error connecting to the database."): DB = mongoClient.db("blog");
});

app.get("/", (req, res) => {
    DB.collection("posts").find({}).toArray(function(error, posts) {

        if (error) {
            console.log("error occured while connecting to collection");
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

app.get("/add", (req, res) => {
    let successData = {};
    if (req.query.success) {
        successData.postAdded = true;
    }
    res.render("add.hbs", successData);
});

app.post("/add", (req, res) => {
    let newPost = {
        title: req.body.title,
        content: req.body.content
    }

    DB.collection("posts").insertOne(newPost, function(error, result) {
        if (error) {
            console.log("error occured while inserting data into the instructors collection");
        }
        res.redirect("/?success=true");
    });
});


app.get('/edit/:mongoId', (req, res) => {

    let mongoId = req.params.mongoId;

    DB.collection("posts").findOne({ _id: mongo.ObjectId(mongoId) }, function(error, posts) {

        if (error) {
            return console.log("error occured while connecting to collection");
        }

        if (req.query.postUpdated) {
            posts.postUpdated = true;
        }

        res.render("edit.hbs", posts);

    });

});


app.post('/edit/:mongoId', (req, res) => {

    let mongoId = req.params.mongoId;
    let whichData = { _id: mongo.ObjectId(mongoId) };
    let incomingContent = { $set: { title: req.body.title, content: req.body.content } };


    DB.collection("posts").updateOne(whichData, incomingContent, function(error, posts) {

        if (error) {
            return console.log("error occured while connecting to instructors collection");
        }


        res.redirect(`/edit/${mongoId}?postUpdated=true`)

    });

});


app.get('/login', (req, res) => {
    let loginData = {};
    if (req.query.failed) {
        loginData.failed = true;
    } else if (req.query.success) {
        loginData.success = true;
    }
    res.render("login.hbs", loginData);
});


app.post('/login', (req, res) => {

    let userInput = { email: req.body.email, password: req.body.pas };

    DB.collection("users").findOne(userInput, function(error, users) {

        if (error) {
            return console.log("error connecting to the collection ");
        }

        (!users) ? res.redirect(`/login?failed=true`): res.redirect(`/login?success=true`);


    });
});


app.get('/signup', (req, res) => {
    res.render("signup.hbs");
});

app.post('/signup', (req, res) => {
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.pas
    }

    DB.collection("users").insertOne(newUser, function(error, result) {
        if (error) {
            console.log("error occured while inserting data into the users database");
        }
        res.send("signup successful");
    });
});



app.post('/delete/:mongoId', (req, res) => {

    let object = { _id: mongo.ObjectId(req.params.mongoId) };

    DB.collection("posts").deleteOne(object, function(error, status) {
        res.json({ deleted: true });
    });


});







app.listen(8080);