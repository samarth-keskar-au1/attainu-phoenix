const LinkedList = require("./list2");

let l1 = new LinkedList();
let l2 = new LinkedList();

Array.from("Ansal").forEach(char => l1.append(char));
l1.print();

Array.from("Arkesh").forEach(char => l2.append(char));
l2.print();

class Comapre {
  compare(l1, l2) {
    let currentNodeList1 = l1.head;
    let currentNodeList2 = l2.head;

    while (currentNodeList1 || currentNodeList2) {
      if (currentNodeList1.value === currentNodeList2.value) {
        currentNodeList1 = currentNodeList1.next;
        currentNodeList2 = currentNodeList2.next;
        continue;
      }
      return "Not Equal";
    }
    return "Equal";
  }
}

let c = new Comapre();

console.log(c.compare(l1, l2));
