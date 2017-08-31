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


//Node assert ---------------------------------------------------------------
/*
var assert = require("assert"); // core module
var jsdom = require('jsdom');
var test1 = require('../public/javascripts/global');  // our module
var myCode = require('./functions.js');  // our module


describe('global', function(){
  describe('Module user list', function(){
    it('should have a populate Method', function(){
      //assert.equal(typeof populateTable, 'object');s
      //assert.equal(test1.populateTable(),2,"testfail");
      assert.equal(test1.showUserInfo(),2,"testfail");
    })
  })
});
describe('tests', function(){
    describe('testFunction', function(){
        it('should return 1', function(){
            // Call the exported function from the module
            assert.equal(myCode.testFunction(),1,"error"); //assert module
        })
    })
}); 

*/
// /Node assert --------------------------------------------------------------

// node supertest 
const request = require('supertest');
const server = require('../app');

describe('test get input', function(){
        it('should response ok when call add',function(done){
            request(server)
                .get('/users/userlist')
                .expect(200, done);
                //.expect("fizz", done);
        });
});