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
        if (!this.headNode)
            return null;
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
            if (!currentNode.nextNode.nextNode && currentNode.nextNode.value === value) {
                isValue = true;
            }
            currentNode = currentNode.nextNode;
        }
        return isValue;
    }
    find(value) {
        if (!this.headNode) {
            return null;
        }
        else if (this.headNode.value === value) {
            return 0;
        }
        let currentNode = this.headNode;
        let currentNodeIndex = 0;
        while (currentNode.nextNode) {
            if (currentNode.value === value)
                break;
            if (!currentNode.nextNode.nextNode && currentNode.nextNode.value === value) {
                currentNodeIndex += 1;
                break;
            }
            currentNodeIndex += 1;
            currentNode = currentNode.nextNode;
        }
        return currentNodeIndex;
    }
    toString() {
        if (!this.headNode) {
            return 'null';
        }
        else if (!this.headNode.nextNode) {
            return `( ${this.headNode.value} ) -> null`;
        }
        let currentNode = this.headNode;
        let listString = '';
        while (currentNode.nextNode) {
            listString += `( ${currentNode.value} ) -> `;
            if (!currentNode.nextNode.nextNode) {
                listString += `( ${currentNode.nextNode.value} ) -> null`;
            }
            currentNode = currentNode.nextNode;
        }
        return listString;
    }
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        }
        else if (index > 0 || index < 0) {
            const newNode = new node_1.default(value);
            const currentNode = this.at(index);
            const prevNode = this.at(index - 1);
            newNode.nextNode = currentNode;
            if (prevNode) {
                prevNode.nextNode = newNode;
            }
        }
    }
    removeAt(index) {
        if (index === 0) {
            const secondNode = this.at(index + 1);
            this.headNode = secondNode;
        }
        else if (index > 0 || index < 0) {
            const prevNode = this.at(index - 1);
            const nextNode = this.at(index + 1);
            if (prevNode) {
                prevNode.nextNode = nextNode;
            }
        }
    }
}
exports.default = LinkedList;
