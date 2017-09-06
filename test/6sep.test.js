const sinon = require("sinon");
const chai  = require("chai");
var expect = chai.expect;

var missionImpossible = {
    start: function (agent) {
        agent.apply(this);
    }
};





describe("",function(){
    it("Ethan Hunt",function(){
        var ethanHunt = sinon.spy();
        if(1>0){
            missionImpossible.start(ethanHunt);                
        }
        for(var i =0;i<=10;i++){
            missionImpossible.start(ethanHunt);                            
        }
        
        ethanHunt.called;
        ethanHunt.callCount;
    
        console.log(" ethanHunt count: "+ethanHunt.callCount);
    })

    it("Stub",function(){
var stub = sinon.stub(),
    opts = { call: function (msg) { console.log(msg); } };

// We can control how the sinon.stub() will behave based on how it’s called!
stub.withArgs("Hello").returns("World");
stub.withArgs("Wuz").returns("Zup?");
stub.withArgs("Kapow").throws();
stub.withArgs(opts).yieldsTo("call", ["Howdy"]);

stub("Hello"); // "World"
stub(options); // "Howdy"

    })
});