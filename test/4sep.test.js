const sinon = require("sinon");
const chai  = require("chai");


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

  // print something 
  echo(word){
      return console.log(word);
  }
}


const joe = new DB("PowerRenger");

joe.echo("Test");