"use strict";
const express = require('express');

const bodyParser = require('body-parser');

const app = express();



app.use("view engine", "hbs");

app.use(bodyParser.urlencoded({
    extended: false
}));



let PLAYERS = [];
let COUNTRY = [];


app.get('/players', (req, res) => {

    let data = {
        player: PLAYERS,
        country: COUNTRY,
        username: "Sam"
    }
    res.render("index.hbs", data);
});


app.post('/players', (req, res) => {
    let playerNameAr = req.body.playerName;
    let playerCountryAr = req.body.playerCountry;

    PLAYERS.push(playerNameAr);
    COUNTRY.push(playerCountryAr);

    res.redirect("/players");



});



app.listen(8000);