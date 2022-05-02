const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    throw new NotImplementedError('Not implemented');
    return this.chain.split('~~').length;
  },
  addLink( val ) {
    throw new NotImplementedError('Not implemented');
    const value = `${val}`;
    if (this.chain.length > 0) {
      this.chain += `~~( ${value} )`;
    } else {
      this.chain += `( ${value} )`;
    }
    if (arguments.length === 0) {
      if (this.chain.length > 0) {
        this.chain += `~~( )`;
      } else {
        this.chain += `( )`;
      }
    }

    return this;
  },
  removeLink( position ) {
    throw new NotImplementedError('Not implemented');
    if (position < 0 || position >= this.chain.split('~~').length || typeof position !== 'number' || position.toString().includes('.')) {
      this.chain = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.split('~~').slice().splice(position, 1).join('~~');
    return this;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    const finish = this.chain;
    this.chain = '';
    return finish;
  }
};

module.exports = {
  chainMaker
};
