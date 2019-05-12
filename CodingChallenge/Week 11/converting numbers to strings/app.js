"use strict";

function convert(number) {
     
    let names = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];

    let finalWord = "";

    while (number > 0) {
        let digit = number % 10 ;

        finalWord = `${names[digit]} ${finalWord}`;

        number = Math.floor(number / 10);
    }


    return finalWord ;
};


console.log(convert(1996));