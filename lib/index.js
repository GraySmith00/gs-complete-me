const PrefixTrie = require('./PrefixTrie');
const fs = require('fs');

const newTrie = new PrefixTrie();

const path = '/usr/share/dict/words';
const dictionary = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

newTrie.populate(dictionary);

const trieForm = document.querySelector('trie-form');
const trieWordInput = document.querySelector('trie-word-input');

trieForm.addEventListener('submit', function() {
  console.log('trie submit!');
  newTrie.insert(trieWordInput.value);
});
