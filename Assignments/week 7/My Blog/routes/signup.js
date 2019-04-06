"use strict";

const express = require("express");

const router = express.Router();

const Joi = require("joi");

const mongo = require("mongodb");

let DB;

let mongoClient = new mongo.MongoClient("mongodb://localhost:27017/blog", { useNewUrlParser: true });
mongoClient.connect(function(error) {
    (error) ? console.log(error): DB = mongoClient.db("blog");
});

router.get('/', (req, res) => {
    res.render("signup.hbs");
});

router.post('/', (req, res) => {
    
    const schema = {
        name: Joi.string().min(3).required(),
        email:Joi.string().email({ minDomainAtoms: 2 }).required(),
        password:Joi.string().min(3).required()
    };

   const result = Joi.validate(req.body,schema);

   if(result.error) {
      return res.send(result.error.details[0].message);
   }

    
    let newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }


    let dupilicateUser = { email: req.body.email};
    
    DB.collection("users").findOne(dupilicateUser, function(error,result) {
    
        if (error) {
          return console.log(error);
        }
    
       if(result) {
          return res.send("The entered email is already registered");
       }

       DB.collection("users").insertOne(newUser, function(error, result) {
        if (error) {
            console.log(error);
        }
        res.send("signup successful");
    });
        
    
    });


   
});

module.exports = router;
