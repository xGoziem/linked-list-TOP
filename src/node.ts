export default class Node {
  value: any | null;
  nextNode: Node | null;

  constructor(value: any | null) {
    this.value = value;
    this.nextNode = null;
  }
}