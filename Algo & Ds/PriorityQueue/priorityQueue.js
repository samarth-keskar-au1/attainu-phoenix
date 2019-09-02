const fs = require("fs");
class Heap {
    constructor(compareFunction){
        this.array =[];
        this.compare = compareFunction; 
    }

    // Heap Functions

    add(item) {
        // Add item to array
        this.array.push(item);

        // HeapifyUp
         this.heapifyUp();
    }

    find(item) {
        for (let i = 0; i < this.array.length; i++) {
            if(this.array[i] === item) {return i}
        }

        return -1;
    }

    remove(item) {
        let indexToRemove = this.find(item);

        if(indexToRemove === this.array.length-1) {
           return this.array.pop();
        }

        if(indexToRemove === -1) {return null;}

        this.array[indexToRemove] = this.array.pop();

        let parent = this.getParent(indexToRemove);

        if(this.hasLeftChild(indexToRemove)&&(!parent || this.compare(parent, this.array[indexToRemove]))) {
            this.heapifyDown(indexToRemove);
        } else {
            this.heapifyUp(indexToRemove);
        }

    }
    
    heapifyUp(index) {

        let currentIndex = index || this.array.length -1;

        // loop till the current indexed element has parent and 
        // the parent is greater than the currentIndex element
        while(this.hasParent(currentIndex) && !this.compare(this.getParent(currentIndex) , this.array[currentIndex])) {

            // Swap elements
            this.swap(this.getParentIndex(currentIndex), currentIndex);

            //  Move to the next element on top
            currentIndex = this.getParentIndex(currentIndex);
        }

    }

    heapifyDown(index=0){
        let currentIndex = index;
        
        while(this.hasLeftChild(currentIndex)) {
            let smallestChildIndex =  this.getLeftChildIndex(currentIndex); 
            
            if(this.hasRightChild(currentIndex) && this.compare(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))) {
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }

            if(this.compare(this.array[currentIndex] , this.array[smallestChildIndex])) {
                break;
            } else {
                this.swap(currentIndex,smallestChildIndex);
            }
            currentIndex = smallestChildIndex;
        }
    }

    //  Helper Functions

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }
    
    getRightChildIndex(parentIndex){
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2);
    }
 
    getLeftChild(parentIndex) {
        return this.array[this.getLeftChildIndex(parentIndex)];
    }
    
    getRightChild(parentIndex){
        return this.array[this.getRightChildIndex(parentIndex)];
    }
 
    getParent(childIndex){
        return this.array[this.getParentIndex(childIndex)];
    } 

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.array.length;
    } 

    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.array.length;
    }

    swap(indexOne,indexTwo){
        let tmp = this.array[indexOne];
        this.array[indexOne] = this.array[indexTwo];
        this.array[indexTwo]  = tmp;
    }


    print() {
        console.log(this.array); 
    }

}




class PriorityQueue extends Heap {
    constructor() {
        let compare = function(a,b) {
            return this.priorities[a] > this.priorities[b];
        }
        super(compare);

        this.priorities = {}
    }

    add(item,priority=100) {
        this.priorities[item] = priority;
        super.add(item) 
    }

    remove(item) {
       super.remove(item)
       delete this.priorities[item];
    }

    changePriority(item,priority) {
        this.remove(item);
        this.add(item,priority);
    }
}


let pq = new PriorityQueue();


fs.readFile("file.csv", "utf-8", (err,data) => {
    let pq = new PriorityQueue();
  	if(err) {return console.log("error reading file");}
    let array = data.trim().split("\n");
    let newArray = [];
    array.forEach(e => newArray.push(e.split(",")));
    newArray.forEach(e => pq.add(e[0],e[1]));
    pq.print();
    
  }); 

 

