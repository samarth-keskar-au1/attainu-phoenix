"use strict";

function MyArray() {
    
    this.array = [];

    for (let i = 0; i < arguments.length; i++) {
        this.array.push(arguments[i]); 
    }
};


MyArray.prototype.print = function () {
    this.array.forEach(function(a) {console.log(a);})
}


MyArray.prototype.search = function(searchElement) {
    for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] == searchElement) {
            return i
        }
        
    }
    return -1
}


MyArray.prototype.sort = function () {
    this.array.sort(function(a,b) { return b - a;})
}


let arr = new MyArray(3,4,6,8,9,0,2);

arr.print();

console.log(arr.search(6));