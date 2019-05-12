"use strict";

//  PART 1
class MyArray {
    constructor(...array) {
        this.array = array;
    }

    print() {
        this.array.forEach(function(a) { console.log(a);})
    }


    search(searchElement) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] == searchElement) {
                return i;
            }
                  
        }
        return -1;
    }
       


    sort() {
        this.array.sort(function(a,b) { return b - a;})
    }
}

let myArray = new MyArray(8,5,9,5,6,1,9);

//  myArray.print();

// console.log(myArray.search(5))


// PART 2


class MySet {
    constructor(...elements) {
        this.set = new Set(elements);
    }

    print() {
        this.set.forEach(function(element) { console.log(element);})
    }

    search(element) {
        return this.set.has(element)
    }
}

let myset = new MySet(9,5,6,3,24,7);

myset.print();

console.log(myset.search(500));