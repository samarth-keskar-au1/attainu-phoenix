"use strict";

const express = require("express");

const bodyParser = require("body-parser");

const add = require("./routes/add");

const edit = require("./routes/edit");

const login = require("./routes/login");

const signup = require("./routes/signup");

const del = require("./routes/delete");

const home = require("./routes/home");

const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/add",add);

app.use("/edit",edit);

app.use("/login",login);

app.use("/signup",signup);

app.use("/delete",del);

app.use("/",home);






app.listen(8080);