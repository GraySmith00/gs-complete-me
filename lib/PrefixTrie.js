import Node from './Node.js';

export default class PrefixTrie {
  constructor() {
    this.wordCount = 0;
    this.rootNode = new Node();
  }

  insert(word) {
    let letters = [...word.split('')];
    let currNode = this.rootNode;

    letters.forEach((letter, i) => {
      if (!currNode.children[letter]) {
        let newLetterNode = new Node(letter);

        if (i === letters.length - 1) {
          newLetterNode.endOfWord = true;
        }

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

  suggest(prefix) {
    // return an array with all words containing this prefix
    let letters = [...prefix.split('')];
    let currNode = this.rootNode;

    if (!currNode.children[letters[0]]) {
      return [];
    }
  }
}
