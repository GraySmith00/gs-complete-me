import { expect, assert } from 'chai';
import Node from '../lib/Node';

describe('NODE', () => {
  let newNode;

  beforeEach(() => {
    newNode = new Node('burrito');
  });

  it('should exist', () => {
    expect(newNode).to.exist;
  });

  it('should have a childrenCount prop that defaults to 0', () => {
    expect(newNode.childrenCount).to.equal(0);
  });

  it('should have a leafNode prop that defaults to false', () => {
    expect(newNode.leafNode).to.equal(false);
  });

  it('should have a children prop that defaults to an empty object', () => {
    expect(newNode.children).to.deep.equal({});
  });
});
