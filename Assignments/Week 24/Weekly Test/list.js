class Node {
	constructor(value,next=null) {
		this.value = value;
		this.next = next;
		this.data = null
	}

	toString(){
		return `${this.value} -> ${this.data}`;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.tail = null
	}


	append(value,data) {
		let newNode = new Node(value);
		
		if(data) {newNode.data = data;}

		if(!this.tail) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

	}

	prepend(value,data){
		let newNode = new Node(value);

		if(data) {newNode.data = data;}
		 
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		
	}


	search(value){
		let currentNode = this.head;
		while(currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}

			currentNode = currentNode.next;
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
			values.push(currentNode.toString());
			currentNode = currentNode.next;
		}

		console.log(values);
	}
}

module.exports = LinkedList;

