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

  it('should have a children prop that defaults to an empty array', () => {
    expect(newNode.children).to.deep.equal([]);
  });

  it('should accept data and save it in a data prop', () => {
    expect(newNode.data).to.equal('burrito');
  });
});
