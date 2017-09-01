var assert = require("assert"); // core module
var jsdom  = require('jsdom');
var test1  = require('../public/javascripts/global');  // our module
var myCode = require('./functions.js');  // our module
var chai   = require('chai');


describe('global', function(){
  describe('Chai assert ', function(){
    it(' should return true ', function(){
      //assert.equal(typeof populateTable, 'object');s
      //assert.equal(test1.populateTable(),2,"testfail");
     // assert.equal(test1.showUserInfo(),2,"testfail");
       // console.log("Test ");
       var result = test1.testreturn();
       chai.assert.isFalse(result,"Test");
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


describe("Joe test",function(){
    it('console somthing',function(){
            console.log("Test");
    });
});


describe('Test Delete function ',function(){
    it('check delete function',function(){
            console.log(test1.deleteUser(event));
    })
});






