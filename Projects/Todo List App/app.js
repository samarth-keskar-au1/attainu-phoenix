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

let TodoList = [];

app.get("/", (req, res) => {
    res.render("index.hbs");
});


app.get("/list", (req, res) => {
    res.json(TodoList);

});


app.post("/", (req, res) => {
    let incomingTask = {
        title: req.body.title,
        des: req.body.des
    }

    TodoList.push(incomingTask);
    res.json(incomingTask);

});

app.listen(8080);