"use strict";
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.use(bodyParser.json());

app.post("/add", (req, res) => {
  let num1 = req.body.number1;
  let num2 = req.body.number2;
  let data = {
    num1: req.body.number1,
    num2: req.body.number2
  };

  let result = parseInt(num1) + parseInt(num2);

  data.result = result;

  res.send(data);
});

app.post("/sub", (req, res) => {
  let num1 = req.body.number1;
  let num2 = req.body.number2;
  let data = {
    num1: req.body.number1,
    num2: req.body.number2
  };

  let result = parseInt(num1) - parseInt(num2);

  data.result = result;

  res.send(data);
});

app.post("/mul", (req, res) => {
  let num1 = req.body.number1;
  let num2 = req.body.number2;
  let data = {
    num1: req.body.number1,
    num2: req.body.number2
  };

  let result = parseInt(num1) * parseInt(num2);

  data.result = result;

  res.send(data);
});

app.post("/div", (req, res) => {
  let num1 = req.body.number1;
  let num2 = req.body.number2;
  let data = {
    num1: req.body.number1,
    num2: req.body.number2
  };

  let result = parseInt(num1) / parseInt(num2);

  data.result = result;

  res.send(data);
});

app.listen(3000);
