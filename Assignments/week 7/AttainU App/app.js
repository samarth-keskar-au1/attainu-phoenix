"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongo = require("mongodb");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set("view engine", "hbs");

app.use(express.static("public"));

// Create the DB connection
let DB;

// Create a Mongo client
let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/attainu", {
  useNewUrlParser: true
});
mongoClient.connect(function(error) {
  if (error) {
    console.log("Error connecting to the database.");
  } else {
    console.log("DB connection established.");
    DB = mongoClient.db("attainu");
  }
});

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/instructors", (req, res) => {
  DB.collection("instructors")
    .find({})
    .toArray(function(error, instructors) {
      if (error) {
        console.log("error occured while connecting to instructors collection");
      }

      let instructorData = {
        instructors: instructors
      };
      res.render("instructors.hbs", instructorData);
    });
});

app.get("/instructors/add", (req, res) => {
  res.render("add-instructor.hbs");
});

app.post("/instructors/add", (req, res) => {
  let newInstructor = {
    name: req.body.name,
    phone: req.body.phone
  };

  DB.collection("instructors").insertOne(newInstructor, function(
    error,
    result
  ) {
    if (error) {
      console.log(
        "error occured while inserting data into the instructors collection"
      );
    }

    res.redirect("/instructors");
  });
});

app.get("/students", (req, res) => {
  DB.collection("students")
    .find({})
    .toArray(function(error, students) {
      if (error) {
        console.log("error occured while connecting to instructors collection");
      }

      let studentData = {
        students: students
      };
      res.render("students.hbs", studentData);
    });
});

app.get("/students/add", (req, res) => {
  res.render("add-student.hbs");
});

app.post("/students/add", (req, res) => {
  let newStudent = {
    name: req.body.name,
    phone: req.body.phone,
    location: req.body.location
  };

  DB.collection("students").insertOne(newStudent, function(error, result) {
    if (error) {
      console.log(
        "error occured while inserting data into the instructors collection"
      );
    }

    res.redirect("/students");
  });
});

app.listen(8080);
