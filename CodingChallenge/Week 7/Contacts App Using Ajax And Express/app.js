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

app.get("/", (req, res) => {
    res.render("index.hbs");
});


app.get("/list", (req, res) => {
    res.json(ContactList);

});


app.post("/", (req, res) => {
    let incomingContact = {
        name: req.body.name,
        phone: req.body.phone
    }

    ContactList.push(incomingContact);
    res.json(incomingContact);

});

app.listen(8080);