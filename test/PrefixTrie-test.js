import { expect, assert } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';

describe('PrefixTrie', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should create a new trie instance', () => {
    expect(newTrie).to.exist;
  });

  it('should default the root node to null', () => {
    expect(newTrie.root).to.equal(null);
  });

  it('should have a children prop that defaults to an empty array', () => {
    expect(newTrie.children).to.deep.equal([]);
  });

  it('should keep a children count', () => {
    expect(newTrie.childrenCount).to.equal(0);
  });

  it('should add a letter to the root children when a word is inserted', () => {
    newTrie.insert('bubblegum');
  });
});
