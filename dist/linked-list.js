"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("./node"));
class LinkedList {
    constructor() {
        this.headNode = null;
    }
    append(value) {
        if (!this.headNode) {
            this.headNode = new node_1.default(value);
        }
        else {
            let currentNode = this.headNode;
            const newNode = new node_1.default(value);
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = newNode;
        }
    }
    prepend(value) {
        if (!this.headNode) {
            this.headNode = new node_1.default(value);
        }
        else {
            const newNode = new node_1.default(value);
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
        }
    }
    size() {
        if (!this.headNode)
            return 0;
        let currentNode = this.headNode;
        let nodeCount = 1;
        while (currentNode.nextNode) {
            nodeCount += 1;
            currentNode = currentNode.nextNode;
        }
        return nodeCount;
    }
    head() {
        return this.headNode;
    }
    tail() {
        if (!this.headNode) {
            return null;
        }
        let tailNode = this.headNode;
        while (tailNode.nextNode) {
            tailNode = tailNode.nextNode;
        }
        return tailNode;
    }
    at(index) {
        if (!this.headNode || index >= this.size())
            return null;
        if (index === 0)
            return this.headNode;
        if (index < 0) {
            index = this.size() + index;
        }
        let currentNode = this.headNode;
        let currentNodeIndex = 0;
        while (currentNode.nextNode) {
            currentNodeIndex += 1;
            currentNode = currentNode.nextNode;
            if (currentNodeIndex === index)
                break;
        }
        return currentNode;
    }
    pop() {
        if (this.size() === 1) {
            this.headNode = null;
        }
        else if (this.size() > 1) {
            let newLastNode = this.at(-2);
            if (newLastNode)
                newLastNode.nextNode = null;
        }
    }
    contains(value) {
        if (!this.headNode) {
            return false;
        }
        else if (this.headNode.value === value) {
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
exports.default = LinkedList;
const myList = new LinkedList();
const emptyList = new LinkedList();
myList.append('first');
myList.append('second');
myList.append('third');
myList.append('fourth');
console.log(myList);
