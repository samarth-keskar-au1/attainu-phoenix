let LinkedList = require("./list");
let fs = require("fs");
class HashTable {
  constructor(size) {
    this.size = size;
    this.array = [];
    for (let i = 0; i < this.size; i++) {
      this.array.push(new LinkedList());
    }
  }

  hash(key) {
    let sum = 0;
    Array.from(key).forEach(character => (sum += character.charCodeAt(0)));
    return sum % this.size;
  }

  getList(key) {
    let hashId = this.hash(key);
    return this.array[hashId];
  }

  set(key) {
    let linkedList = this.getList(key);
    let node = linkedList.search(key);

    if (node) {
      return false;
    } else {
      linkedList.append(key);
      return true;
    }
  }

  get(key) {
    let linkedList = this.getList(key);
    let node = linkedList.search(key);

    if (node) {
      return node;
    } else {
      return null;
    }
  }

  delete(key) {
    let linkedList = this.getList(key);
    linkedList.delete(key);
  }

  print() {
    this.array.forEach(e => e.print());
  }
}

let h = new HashTable(8);

let name = "ansal";

let result = name => {
  let flag = true;
  for (let i = 0; i < name.length; i++) {
    let setting = h.set(name[i]);
    if (setting == false) {
      flag = false;
      break;
    }
  }
  return flag;
};

console.log(result(name));
