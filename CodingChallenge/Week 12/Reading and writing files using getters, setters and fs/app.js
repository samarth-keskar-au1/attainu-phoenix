const fs = require("fs");


class MyFile {
    constructor(fileName) {
        this.fileName = fileName;
    }

    get data() {
        return fs.readFileSync(this.fileName,"utf-8");
    }
    H
    set data(value){
        fs.writeFileSync(this.fileName, value, "utf-8", "w");
    }
}


let file = new MyFile("howdy.txt");

file.data = "Hi There";

console.log(file.data);

file.data = "Hello There ";

console.log(file.data);

