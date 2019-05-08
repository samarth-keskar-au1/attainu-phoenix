"use strict";

let answer = 1;

function calcFun(n) {
    for (let i = 1; i <= n; i++) {
        answer = answer * i;

    }
    return answer;
}


console.log(calcFun(10));