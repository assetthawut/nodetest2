var request = require('supertest'); //call supertest to use
var server = require('./../app');

describe('test app.js', function(){
    it('should response ok when call /3',function(done){

        request(server)
            .get('/3')
            .expect(200)
            .expect("fizz",done);


    });
});