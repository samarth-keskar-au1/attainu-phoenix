class ColorConsole {

  constructor (color) {
    this.color = color;
  }

  log(text) {
   return this.color == "Red" ? console.log("\x1b[31m",text) : this.color == "Green" ? console.log("\x1b[32m",text) : this.color == "Yellow" ? console.log("\x1b[33m",text) :console.log("\u001b[0m","The Color is not allowed");
  };
}

let redConsole = new ColorConsole("Red");
redConsole.log("AttainU University");
let greenConsole = new ColorConsole("Green");
greenConsole.log("AttainU University");
let yellowConsole = new ColorConsole("Yellow");
yellowConsole.log("AttainU University");
let invalidConsole = new ColorConsole("Pink");
invalidConsole.log("AttainU University");
