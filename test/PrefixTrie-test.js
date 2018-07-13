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

  it('should default the rootNode node data to null', () => {
    expect(newTrie.rootNode).to.deep.equal({
      data: null,
      childrenCount: 0,
      children: []
    });
  });

  // it('should have a children prop that defaults to an empty array', () => {
  //   expect(newTrie.children).to.deep.equal([]);
  // });

  it('should keep a children count', () => {
    expect(newTrie.childrenCount).to.equal(0);
  });

  it('should add a child node when a word is inserted if that letter does not already exist', () => {
    newTrie.insert('tie');
    expect(newTrie.rootNode.children[0].data).to.equal('t');
    expect(newTrie.rootNode.children[0].children[0].data).to.equal('i');
  });

  it('should not add a child node if that letter already exists', () => {
    newTrie.insert('truck');
    newTrie.insert('try');
    newTrie.insert('tru');
    newTrie.insert('tree');
    newTrie.insert('train');

    const occurances = newTrie.rootNode.children.filter(node => {
      return node.data === 't';
    });

    expect(newTrie.rootNode.children[0].data).to.equal('t');
    expect(occurances.length).to.equal(1);
  });
});
