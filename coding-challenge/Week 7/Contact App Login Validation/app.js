"use strict";

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static("public"));

let ContactList = [];

let userDB = [
    {username: "ansal", password: "ansal123"},
    {username: "vaibhav", password: "vaibhav123"},
    {username: "divyam", password: "divyam123"}
  ];

app.get("/", (req, res) => {

    let data = {
        db: ContactList
    }
    res.render("index.hbs", data);
});

app.post("/", (req, res) => {
    let incomingContact = {
        name: req.body.name,
        phone: req.body.phone
    }

    ContactList.push(incomingContact);
    res.redirect("/");

});


app.get("/login",(req,res) => {
    res.render("login.hbs")
});





app.post("/login", (req, res) => {
    let credDb = function () {
        let username = req.body.username;
        let password = req.body.password;
        for (let i = 0; i < userDB.length; i++) {
            if (username == userDB[i].username && password == userDB[i].password) {
                return true;
            }   else {
                continue;
            }
        }
        return false;
    };

      let credValidate = credDb();
    
     if (credValidate == true) {
         res.redirect("/")
     } else {
         res.send("Wrong credentials");
     }
     });

app.listen(8080);