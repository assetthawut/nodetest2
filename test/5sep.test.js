const sinon = require("sinon");
const chai  = require("chai");
var expect = chai.expect;


class DB {
  constructor(connection) {
    this.db = connection;
  }
  
  // save data to DB
  save(data) {
    this.db.save(data);
  }
  
  // get data from DB
  get(id) {
    return this.db.get(id)
  }

sum(){
     var sumsum = 1+1;
  }


  // print something 
  echo(word){
      this.sum();
      this.sum();
      this.sum();
      return console.log(word);
  }


}

class indy{
    
}


class Document {
  constructor (db) {
    this.db = db;
  }
 
  getData(id) {
    return this.db.get(id);
  }
}

/* callback function*/
function myFunction(condition,callback){
    if(condition){
        callback();
    }
}

describe(" Test Mock ",function(){
    it(" Mock ",function(){

            // const db = {};
            // db.get = sinon.stub();
            // db.get.withArgs('abc_1').returns({id:'abc_1',text:'some text'});

        // const doc = new Document(db);
        // sinon.mock(doc).expects('getData').once().withArgs('abc_1').returns({id:'abc_1',text:'some text'});

        // doc.verify();
        // doc.restore();
        /* ------------------- */ 
            // const doc = new Document(db);
            // let mock = sinon.mock(doc);
            // mock.expects("getData").once().withArgs('abc_1').returns({id:'abc_1',text:'some text'});
            // mock.verify();
            // mock.restore();

            /* code below can  run  */
                    // const db = {};
                    // db.get   = sinon.stub();
                    // db.get.withArgs('abc_1').returns({ text: 'some text'});
                    // const doc = new Document(db);
                    // sinon.mock(doc).expects('getData').once().withArgs('abc_1').returns({id: 'abc_1', text: 'some text'});
                    // sinon.mock(doc).verify();
                    // sinon.mock(doc).restore();

            var joe = new DB();
            var spy = sinon.spy();

            var mock = sinon.mock(joe);
            var expectation = mock.expects("sum").atLeast(1).atMost(3);  
            
            joe.sum();            
            //expectation.verify();
             mock.restore();
             mock.verify();
            





    });



    it(" Called Spy 1 ",function(){
        var spy  = sinon.spy();
        spy('Hello','World');
        console.log(spy.firstCall.args);
    });

    it(" Called Spy 2 ",function(){
        var user = { setName: function(name){
            this.name = name;
        }}

        var setnameSpy = sinon.spy(user,'setName');
        user.setName("Joe Sett 1");
        user.setName("Joe Sett 2");
        user.setName("Joe Sett 3");
        console.log(setnameSpy.callCount);
        setnameSpy.restore();
    });

    // it(" Called Spy 3",function(){
    //     var callback = sinon.spy();
    //     myFunction(true,callback);
    //     assert(callback.calledOnce);
    // }); 

    it(" Called Mock ",function(){
        var test = new DB();
        //test.echo("Test");
        var mock = sinon.mock(test).expects('echo').once().returns('finished');
        //test.echo("Test");
        new Document().getData(test);
        mock.verify();
        mock.restore();


        
    });    
});