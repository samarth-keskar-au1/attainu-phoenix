"use strict";

const express = require("express");
const app = express();

// Route For addition operation

app.get("/addition/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let result = parseInt(num1) + parseInt(num2);
  res.send(`The addition of ${num1} and ${num2} is ${result}`);
});

//// Route For substraction operation

app.get("/sub/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let result = parseInt(num1) - parseInt(num2);
  res.send(`The substraction of ${num1} and ${num2} is ${result}`);
});

// Route For multiplication operation

app.get("/mul/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let result = parseInt(num1) * parseInt(num2);
  res.send(`The multiplication of ${num1} and ${num2} is ${result}`);
});

// Route For dividation operation

app.get("/div/:num1/:num2", (req, res) => {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let result = parseInt(num1) / parseInt(num2);
  res.send(`The dividation of ${num1} and ${num2} is ${result}`);
});

app.listen(3000);
