import Node from './Node.js';
import locus from 'locus';

export default class PrefixTrie {
  constructor() {
    this.wordCount = 0;
    this.rootNode = new Node();
  }

  insert(word) {
    let letters = [...word];
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

    if (!currNode.endOfWord) {
      currNode.endOfWord = true;
      this.wordCount++;
    }

    // console.log(currNode);
    // console.log(JSON.stringify(this, null, 4));
  }

  suggest(prefix) {
    let letters = [...prefix];
    let currNode = this.rootNode;

    for (let i = 0; i < letters.length; i++) {
      currNode = currNode.children[letters[i]];
      if (!currNode) {
        return [];
      }
    }

    let newWordArr = [];

    getWords(prefix, currNode);

    function getWords(stringSoFar, node) {
      Object.keys(node.children).forEach(key => {
        let newString = stringSoFar + key;

        if (node.children[key].endOfWord) {
          newWordArr.push(newString);
        }

        getWords(newString, node.children[key]);
      });
    }

    console.log(newWordArr);
    return newWordArr;
  }

  populate(words) {
    words.forEach(word => this.insert(word.toLowerCase()));
  }
}

// [hello, hellos, heck]

// autofill.push([...prefix, leter, leter, letter].join(''));
