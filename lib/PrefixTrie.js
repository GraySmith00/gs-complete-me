import Node from './Node.js';

export default class PrefixTrie {
  constructor() {
    this.rootNode = new Node();
  }

  insert(word) {
    let letters = [...word.split('')];
    let currNode = this.rootNode;

    letters.forEach(letter => {
      if (!currNode.children[letter]) {
        let newLetterNode = new Node(letter);

        currNode.children[letter] = newLetterNode;
        currNode.childrenCount++;
        currNode = currNode.children[letter];
      } else {
        currNode = currNode.children[letter];
      }
    });
    console.log(JSON.stringify(this, null, 4));
  }
}
