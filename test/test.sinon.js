var sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;

describe('EventEmitter', function(){
  describe('#emit()', function(){
    it('should invoke the callback', function(){
      var spy = sinon.spy();
      var emitter = new EventEmitter;

      emitter.on('foo', spy);
      emitter.emit('foo');
      spy.called.should.equal.true;
    })

    it('should pass arguments to the callbacks', function(){
      var spy = sinon.spy();
      var emitter = new EventEmitter;

      emitter.on('foo', spy);
      emitter.emit('foo', 'bar', 'baz');
      sinon.assert.calledOnce(spy);
      sinon.assert.calledWith(spy, 'bar', 'baz');
    
    })
  })
})