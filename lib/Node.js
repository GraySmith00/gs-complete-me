export default class Node {
  constructor(data = null) {
    this.data = data;
    this.childrenCount = 0;
    this.endOfWord = false;
    this.leafNode = false;
    this.children = {};
  }
}
