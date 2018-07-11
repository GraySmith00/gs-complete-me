import Node from './Node.js';

export default class PrefixTrie {
  constructor() {
    this.root = null;
    this.childrenCount = 0;
    this.children = [];
  }

  insert(word) {
    const letters = [...word.split('')];
    let currNode = this;
    letters.forEach(letter => {
      if (!currNode.children.includes(letter)) {
        let newLetterNode = new Node(letter);
        currNode.children.unshift(newLetterNode);
        currNode.childrenCount++;
        currNode = currNode.children[0];
      }
    });
    console.log(JSON.stringify(this, null, 4));
  }

  addLetterNode(letter) {
    if (!this.children.includes(letter)) {
      const newLetterNode = new Node(letter);
      this.children.unshift(newLetterNode);
      this.childrenCount++;
    }
  }
}
