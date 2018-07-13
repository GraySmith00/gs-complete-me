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

  it('should have a rootNode', () => {
    expect(newTrie.rootNode).to.deep.equal({
      childrenCount: 0,
      children: {}
    });
  });

  it('should add a child node when a word is inserted if that letter does not already exist', () => {
    newTrie.insert('tie');
    expect('t' in newTrie.rootNode.children).to.equal(true);
    expect('i' in newTrie.rootNode.children['t'].children).to.equal(true);
  });

  it('should not add a child node if that letter already exists', () => {
    newTrie.insert('truck');
    newTrie.insert('try');
    newTrie.insert('tru');
    newTrie.insert('tree');
    newTrie.insert('train');

    const occurances = Object.keys(newTrie.rootNode.children).filter(key => {
      return key === 't';
    });

    expect('t' in newTrie.rootNode.children).to.equal(true);
    expect('r' in newTrie.rootNode.children['t'].children).to.equal(true);
    expect(occurances.length).to.equal(1);
  });
});
