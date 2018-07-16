import PrefixTrie from './PrefixTrie';

const newTrie = new PrefixTrie();

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

  newTrie.insert(trieWordInput.value);
});

trieWordInput.addEventListener('keyup', function() {
  let suggestions = newTrie.suggest(trieWordInput.value);

  document.querySelector('.autocomplete-items').innerHTML = '';
  autoComplete(suggestions, trieWordInput.value);
});

function autoComplete(suggestions, input) {
  if (!input) {
    return;
  }
  const parentEl = document.querySelector('.autocomplete-items');

  suggestions.forEach(suggestion => {
    const suggestionEl = document.createElement('DIV');

    suggestionEl.innerHTML = `
        ${suggestion}
        <input type="hidden" value="Tiger Woods">
    `;

    parentEl.appendChild(suggestionEl);
  });
}
