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
      //this.sum();
      return console.log(word);
  }





  
 

}

class Document {
  constructor (db) {
    this.db = db;
  }
 
  getData(id) {
    return this.db.get(id);
  }
}





const joe = new DB("PowerRenger");

joe.echo("Test");


describe("Test Sinon Done!!!",function(){
    it(" First Test Spy in function echo ",function(){
        const spy  = sinon.spy(joe,'sum');
        joe.echo("Hello");
        expect(spy.calledTwice).to.equal(true);
    });








    it(" Second Test Stub",function(){
         //db = {};
         //db.echo = sinon.stub();
         //db.echo.withArgs('Test').return("Hi");
         //const doc = new DB(sett);
         //expect(doc.getData('Test')).to.deep.equal("Hi");

        // fake db object
        // fake db object
        fake = {};
        // stub the method
        fake.get = sinon.stub(); 
        // specify argument and result to return
        fake.get.withArgs('abc_1').returns({id: 'abc_1', text: 'some text'});
        fake.get.withArgs('abc_2').returns({id: 'abc_2', text: 'some text 2'});

        const doc = new Document(fake);

        // expect result
        expect(doc.getData('abc_1')).to.deep.equal({id: 'abc_1', text: 'some text 00000'});
        expect(doc.getData('abc_2')).to.deep.equal({id: 'abc_2', text: 'some text 00000'});
       
    });



});