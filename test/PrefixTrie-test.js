import { expect } from 'chai';
import PrefixTrie from '../lib/PrefixTrie';
import fs from 'fs';

describe('Instantiate PrefixTrie', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should create a new trie instance', () => {
    expect(newTrie).to.exist;
  });

  it('should have a rootNode', () => {
    expect(newTrie.rootNode).to.deep.equal({
      data: null,
      childrenCount: 0,
      endOfWord: false,
      leafNode: false,
      children: {}
    });
  });
});

describe('Insert Method', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should have an insert method', () => {
    expect(newTrie).respondsTo('populate');
  });

  it('should add a child node when a word is inserted if that letter does not already exist', () => {
    newTrie.insert('tie');
    expect('t' in newTrie.rootNode.children).to.equal(true);
    expect('i' in newTrie.rootNode.children['t'].children).to.equal(true);
  });

  it('should not add a child node if that letter already exists', () => {
    newTrie.insert('truck');
    newTrie.insert('try');
    newTrie.insert('true');
    newTrie.insert('tree');
    newTrie.insert('trees');
    newTrie.insert('train');

    const occurances = Object.keys(newTrie.rootNode.children).filter(key => {
      return key === 't';
    });

    expect('t' in newTrie.rootNode.children).to.equal(true);
    expect('r' in newTrie.rootNode.children['t'].children).to.equal(true);
    expect(occurances.length).to.equal(1);
  });

  it('should increment the word count if a new word is inserted', () => {
    newTrie.insert('truck');
    expect(newTrie.wordCount).to.equal(1);
  });

  it('should not increment the word count if a word that already exists is entered', () => {
    newTrie.insert('truck');
    newTrie.insert('truck');
    expect(newTrie.wordCount).to.equal(1);
  });
});

describe('Suggest Method', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should have a suggest method', () => {
    expect(newTrie).respondsTo('suggest');
  });

  it('should return an empty array if there are no words containing the prefix', () => {
    newTrie.insert('truck');
    newTrie.insert('try');
    newTrie.insert('true');
    newTrie.insert('tree');
    newTrie.insert('trees');
    newTrie.insert('train');

    expect(newTrie.suggest('tx')).to.deep.equal([]);
  });

  it('should return an array of all words containing the prefix', () => {
    newTrie.insert('to');
    newTrie.insert('tie');
    newTrie.insert('tree');
    newTrie.insert('train');
    newTrie.insert('trucker');

    expect(newTrie.suggest('t')).to.deep.equal([
      'to',
      'tie',
      'tree',
      'train',
      'trucker'
    ]);

    expect(newTrie.suggest('tr')).to.deep.equal(['tree', 'train', 'trucker']);
  });
});

// Populate
describe('Populate method', () => {
  let newTrie;

  beforeEach(() => {
    newTrie = new PrefixTrie();
  });

  it('should have a Populate method', () => {
    expect(newTrie).respondsTo('populate');
  });

  it('should insert an array of words when calling the populate method', () => {
    const path = '/usr/share/dict/words';
    const dictionary = fs
      .readFileSync(path)
      .toString()
      .trim()
      .split('\n');

    newTrie.populate(dictionary);
    expect(newTrie.suggest('wizardis')).to.deep.equal(['wizardism']);
  });

  it('should increase the word count when populating', () => {
    const path = '/usr/share/dict/words';
    const dictionary = fs
      .readFileSync(path)
      .toString()
      .trim()
      .split('\n');

    newTrie.populate(dictionary);
    expect(newTrie.wordCount).to.equal(234371);
  });
});

// Delete

// it('should have a Delete method', () => {

// })

// it('should remove the completed word flag from the word passed into the delete method', () => {

// })

// it('should remove any nodes that no longer lead to a completed word', () => {

// })
