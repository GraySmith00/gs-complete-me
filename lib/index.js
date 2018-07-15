import PrefixTrie from './PrefixTrie';
// import fs from 'fs';

const newTrie = new PrefixTrie();

// const path = '/usr/share/dict/words';
// const dictionary = fs
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('\n');

// newTrie.populate(dictionary);

const words = [
  'tree',
  'trailer',
  'trampoline',
  'triple',
  'top',
  'teacup',
  'tense',
  'time',
  'table',
  'titan',
  'titans',
  'track'
];

newTrie.populate(words);

const trieForm = document.querySelector('.trie-form');
const trieWordInput = document.querySelector('.trie-word-input');

trieForm.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('trie submit!');
  newTrie.insert(trieWordInput.value);
});

trieWordInput.addEventListener('keyup', function() {
  let suggestionArr = newTrie.suggest(trieWordInput.value);

  console.log(suggestionArr);
});
