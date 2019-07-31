class Node {
	constructor(value,next=null) {
		this.value = value;
		this.next = next;
	}

	toString(){
		return this.value;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null
	}


	append(value) {

		let newNode = new Node(value);

		if(!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

	}

	prepend(value){
		let newNode = new Node(value);

		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		
	}


	search(value){
		while(this.head) {
			if (this.head.value === value) {
				return this.head;
			}

			this.head = this.head.next;
		}

		return null;
	}

	delete(value) {
		if (this.head.value === value) {
			return this.head = this.head.next;
		} else {
			let previousNode = this.head;
			let currentNode = previousNode.next;

			while(currentNode) {
				if (currentNode.value === value) {
					previousNode.next = currentNode.next;
					currentNode = currentNode.next;
					break;
				} else {
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
			}
		}	
	}


	print(){
		let currentNode = this.head;
		let values = [];
		while(currentNode){
			values.push(currentNode.value);
			currentNode = currentNode.next;
		}

		console.log(values);
	}
}

let l = new LinkedList();

l.append("sam");
l.append("ansal");

l.print();

l.prepend("vaibhav");
l.prepend("divyam");

l.print();

l.delete("vaibhav");

l.print();



// console.log(l.search("divyam"));