class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.unshift(value);
    console.log(this.array);
  }

  pop() {
    this.array.shift();
    console.log(this.array);
  }
}

let s = new Stack();

s.push(13);

s.push(97);

s.pop();

s.push(77);

s.push(63);

s.pop();
