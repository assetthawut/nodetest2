const chai = require("chai");
const global = require("../public/javascripts/global");
var jsdom  = require('jsdom');
var sinon  = require('sinon');
//var jQuery = require('jQuery');
var $ = require('jQuery');





describe(" 2 September MochaJS test",function(){

    it(' First Test Test Return function It should return false ',function(){
        chai.assert.isFalse(global.testreturn());
        //console.log("      "+global.testreturn());
    });

/*    it(" Second Test Console Populate function",function(){
        console.log("      "+global.populateTable());
    });
*/ 
    it(" Third Test function should return  JSON (true)",function(){
        expectdata = {"firstName":"John", "lastName":"Doe"};
        chai.assert.deepEqual(global.returnjson(true),expectdata);
    });

        it(" fouth Test function should not  return  JSON (false)",function(){
        chai.assert.isNotTrue(global.returnjson(false));
    });
    /*
        it(" Fifth Test function shoulds return JSON data in /users/userlist",function(){
            $.getJSON('/users/userlist',function(data){
                    console.log(data);
            });
    });
        */

        it(" Sixth Test using Sinon ",function(){
            message = "HOHOHO";
            sinon.log = function (message) {
                console.log(message);
                };
           // jQuery.getJSON("/users/userlist");    
           

$.getJSON('http://localhost:3000/users/userlist',function(data) {
  console.log(data);
});

        });
});