export default class Node {
  value: any;
  nextNode: Node | null;

  constructor(value: any) {
    this.value = value;
    this.nextNode = null;
  }
}