"use strict";

let compareStrings = function (a, b) {

    if (a.length != b.length) {
        if (a.length > b.length) {
            console.log(`The lenght of the strings are not similar and the the diffrence between their
            lenght is ${a.length - b.length}`);
        } else {
            console.log(`
                The lenght of the strings are not similar and the the diffrence between
                 their lenght is ${b.length - a.length}`);
        }

        return;
    }

    if (a.length == b.length) {
        let counter = 0;
        for (let i = 0; i <= a.length; i++) {
            if (a[i] != b[i]) {

                counter++;

            }

        }
        console.log(`There are ${counter} number of character which are not equal.`);


    }
}



compareStrings("sam", "sammy");