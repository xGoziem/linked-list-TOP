import Node from './node';

export default class LinkedList {
  headNode: Node | null = null;

  append(value: any): void {
    if (!this.headNode) {
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

  prepend(value: any): void {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      const newNode = new Node(value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }
  }

  size(): number {
    if (!this.headNode) return 0;

    let currentNode = this.headNode;
    let nodeCount = 1;

    while (currentNode.nextNode) {
      nodeCount += 1;
      currentNode = currentNode.nextNode;
    }

    return nodeCount;
  }

  head(): Node | null {
    return this.headNode;
  }

  tail(): Node | null {
    if (!this.headNode) {
      return null;
    }

    let tailNode = this.headNode;

    while (tailNode.nextNode) {
      tailNode = tailNode.nextNode;
    }

    return tailNode;
  }

  at(index: number): Node | null {
    if (!this.headNode || index >= this.size()) return null;

    if (index === 0) return this.headNode;

    if (index < 0) {
      index = this.size() + index;
    }

    let currentNode = this.headNode;
    let currentNodeIndex = 0;

    while (currentNode.nextNode) {
      currentNodeIndex += 1;
      currentNode = currentNode.nextNode;

      if (currentNodeIndex === index) break;
    }

    return currentNode;
  }

  pop(): void {
    if (this.size() === 1) {
      this.headNode = null;
    } else if (this.size() > 1) {
      let newLastNode = this.at(-2);
      if (newLastNode) newLastNode.nextNode = null;
    }
  }

  contains(value: any): boolean {
    if (!this.headNode) {
      return false;
    } else if (this.headNode.value === value) {
      return true;
    }

    let currentNode = this.headNode;
    let isValue = false;

    while (currentNode.nextNode) {
      if (currentNode.value === value) {
        isValue = true;
      }

      if (!currentNode.nextNode.nextNode) {
        if (currentNode.nextNode.value === value) {
          isValue = true;
        }
      }

      currentNode = currentNode.nextNode;
    }

    return isValue;
  }
}

const myList = new LinkedList();
const emptyList = new LinkedList();

myList.append('first');
myList.append('second');
myList.append('third');
myList.append('fourth');

console.log(myList);