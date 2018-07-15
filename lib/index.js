const PrefixTrie = require('./PrefixTrie');

console.log('heyyyyy');

const newTrie = new PrefixTrie();

const path = '/usr/share/dict/words';
const dictionary = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

newTrie.populate(dictionary);
