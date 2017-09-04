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


const joe = new DB("PowerRenger");

joe.echo("Test");


describe("Test Sinon Done!!!",function(){
    it(" First Test Spy in function echo ",function(){
        const spy  = sinon.spy(joe,'sum');
        joe.echo("Hello");
        expect(spy.calledOnce ).to.equal(true);
    });

    it(" Second Test Stub",function(){
        // db = {};
        // db.echo = sinon.stub();
        // db.echo.withArgs('Test').return("Hi");
        // const doc = new Document(sett);
        // expect(doc.getData('Test')).to.deep.equal("Hi");




    });

});