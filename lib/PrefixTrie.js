import Node from './Node.js';

export default class PrefixTrie {
  constructor() {
    this.wordCount = 0;
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

    this.wordCount++;
    console.log(JSON.stringify(this, null, 4));
  }
}
