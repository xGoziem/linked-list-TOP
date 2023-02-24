import Node from './node';

export default class LinkedList {
  headNode: Node | null = null;

  append(value: any) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
    } else {
      let currentNode = this.headNode;
      const newNode = new Node(value);

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      
      currentNode.nextNode = newNode;
    }
  }
}

const myList = new LinkedList();
myList.append('first!');
myList.append('second!');
myList.append('third!');
console.log(myList);