const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  property: [],

  getLength() {
    return this.property.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value !== undefined){
      this.property.push(`( ${value} )`);
    } else {
      this.property.push(`( )`);
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position < 1 | position > this.getLength() | typeof position !== 'number') {
      this.property = [];
      throw Error("You can't remove incorrect link!");
    } else {
      this.property.splice(position - 1, 1);
      return this;
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.property.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const chain = this.property.join('~~');
    this.property = [];
    return chain;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
