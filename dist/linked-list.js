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
        if (this.headNode === null) {
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
}
exports.default = LinkedList;
const myList = new LinkedList();
myList.append('first!');
myList.append('second!');
myList.append('third!');
console.log(myList);
