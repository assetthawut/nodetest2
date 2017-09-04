const chai = require("chai");
const global = require("../public/javascripts/global");
//var jsdom  = require('jsdom');
var sinon  = require('sinon');
//var jQuery = require('jQuery');
var jq = require('jquery');
var expect = chai.expect;
var sinon_chai = require('sinon-chai');
var spies = require('chai-spies');
chai.use(sinon_chai);

var jsdom = require('jsdom').jsdom
  , myWindow = jsdom().createWindow()
  , $ = require('jQuery')
  , jq = require('jQuery').create()
  , jQuery = require('jQuery').create(myWindow)
  ;







function testMe(callback){
    callback();
}

const user = {
    setName: function(name){
        this.name = name;
    }
}




function jsondata(user,callback){
    jq.post('/users/userlist',{
           username: user.username,
           email:    user.email
    },callback)
}




describe(" 2 September MochaJS test",function(){

    it('Test PPor',function(){
            console.log(global.populateTable());
    });
    



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
           


        });

        it(' Seventh Test should call the callback',function(){
            let callbackSpy = sinon.spy();
            testMe(callbackSpy);    
        });


        it(' Eighth Test ',function(){
            let setNameSpy = sinon.spy(user,'setName');
            user.setName("Joe Sett");
            
            //expect(setNameSpy).does.exist;
            //sinon
            expect(setNameSpy).to.have.been.calledOnce;
            expect(setNameSpy).to.have.been.calledWith('Joe Sett');
            setNameSpy.restore();
        });

        // ตัวแปร ตัวใหม่สามารถใช้งานได้ *-* 
        it(' Ninth Test ',function(){
            let setNameSpy2 = sinon.spy(user,'setName');
            user.setName("Joe Sett");
            
            //expect(setNameSpy).does.exist;
            //sinon
            expect(setNameSpy2).to.have.been.calledOnce;
            expect(setNameSpy2).to.have.been.calledWith('Joe Sett');
            setNameSpy2.restore();
        });

/*
        it(" Tenth Test Stub",function(){
            let post = sinon.stub(jQuery,'post')
            post.yield()
            let callbackSpy = sinon.spy()
            let testUser    = { username: "data",email: "data"}
            saveUser(testUser,callbackSpy)
            expect(callbackSpy).to.have.been.calledOnce;
            post.restore(); 
        });
*/

        it(" Tenth should send correct parameters to the expected URL",function(){
            let post = sinon.stub(jq,'post')
            let expectedUrl = '/users/userlist';
            let expectedparams = {
                username: 'Joe',
                email:     'joe@gmail.com'
            }
            let testUser = {
                username: expectedparams.username,
                email: expectedparams.email
            }

            jsondata(testUser,function(){})
            expect(post).to.be.calledWith(expectedUrl,expectedparams)
            post.restore()
        })
});