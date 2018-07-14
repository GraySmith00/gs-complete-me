export default class Node {
  constructor() {
    this.childrenCount = 0;
    this.endOfWord = false;
    this.leafNode = false;
    this.children = {};
  }
}
