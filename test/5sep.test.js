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

class Document {
  constructor (db) {
    this.db = db;
  }
 
  getData(id) {
    return this.db.get(id);
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

            const db = {};
            db.get   = sinon.stub();
            db.get.withArgs('abc_1').returns({ text: 'some text'});
            const doc = new Document(db);
            sinon.mock(doc).expects('getData').once().withArgs('abc_1').returns({id: 'abc_1', text: 'some text'});
            sinon.mock(doc).verify();
            sinon.mock(doc).restore();
            
    });
});