"use strict";
const express = require('express');

const bodyParser = require('body-parser');

const app = express();



app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({
    extended: false
}));



let PLAYERS = [];


app.get('/players', (req, res) => {

    let data = {
        player: PLAYERS,
        username: "Sam"
    }
    res.render("index.hbs", data);
});


app.post('/players', (req, res) => {
    let playersObj = {};

    playersObj.name = req.body.playerName;

    playersObj.country = req.body.playerCountry;

    PLAYERS.push(playersObj);


    res.redirect("/players");



});



app.listen(3000);