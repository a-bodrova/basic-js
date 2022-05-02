const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( val ) {
    const value = `${val}`;
    this.chain.push(value);

    return this;
  },
  removeLink( position ) {
    if (position - 1 < 0 || position - 1 >= this.chain.length || typeof position !== 'number' || position.toString().includes('.')) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();

    return this;
  },
  finishChain() {
    const finish = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finish;
  }
};

module.exports = {
  chainMaker
};
