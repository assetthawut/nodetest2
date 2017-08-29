/* const expect = require('chai').expect;
const Calculate = require('../src/sum');
describe('Test class Calculate', () => {
  let calculate;
  beforeEach(() => {
    calculate = new Calculate();
  })
  it('should be success when value1 = 10, value2 = 15, expected 25', () => {
    // arrange
    const value1 = 10;
    const value2 = 15;
    // act
    const total = calculate.sum(value1, value2);
    // assert
    expect(25).to.be.equal(total);
  });
}); */


//Node assert --------------------------------------------------------

var assert = require("assert"); // core module
var global = require('../public/javascripts/global');  // our module

describe('global', function(){
  describe('Module user list', function(){
    it('should have a populate Method', function(){
      assert.equal(typeof populateTable, 'object');
      //assert.equal(typeof populateTable, 'function');
    })
  })
}); 

// /Node assert --------------------------------------------------------