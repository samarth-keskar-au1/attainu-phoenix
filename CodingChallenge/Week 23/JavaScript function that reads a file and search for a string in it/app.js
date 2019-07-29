const fs = require("fs");

function searchString(fileName,searchWord) {
    fs.readFile(fileName,'utf-8' ,(err,data) => {

        if (err) {
            return console.log("error reading file");
        }

        data = data.split("\n");

        data.forEach((d,i)=> {
            if (d.includes(searchWord)) {
                console.log("line no=>",i,d);
            }
        })

    })
}

function main() {
    if (process.argv.length !== 4) {
        console.log("please enter all necessary things.");
    }

    let fileName = process.argv[2];
    let searchWord = process.argv[3];

    searchString(fileName,searchWord);
}

main();