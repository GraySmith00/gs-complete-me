import Node from './Node.js';

export default class PrefixTrie {
  constructor() {
    this.wordCount = 0;
    this.rootNode = new Node();
  }

  insert(word) {
    const letters = [...word.toLowerCase()];
    let currNode = this.rootNode;

    letters.forEach(letter => {
      if (!(letter in currNode.children)) {
        currNode.children[letter] = new Node();
        currNode = currNode.children[letter];
      } else {
        currNode = currNode.children[letter];
      }
    });

    if (!currNode.endOfWord) {
      currNode.endOfWord = true;
      this.wordCount++;
    }
  }

  suggest(prefix) {
    const letters = [...prefix.toLowerCase()];
    let currNode = this.rootNode;

    for (let i = 0; i < letters.length; i++) {
      currNode = currNode.children[letters[i]];
      if (!currNode) {
        return [];
      }
    }

    const suggestions = [];

    addWords(prefix, currNode);

    function addWords(startingStr, node) {
      Object.keys(node.children).forEach(key => {
        let newString = startingStr + key;

        if (node.children[key].endOfWord) {
          suggestions.push(newString);
        }

        addWords(newString, node.children[key]);
      });
    }

    return suggestions;
  }

  populate(words) {
    words.forEach(word => this.insert(word.toLowerCase()));
  }
}
