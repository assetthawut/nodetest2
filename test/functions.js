function testFunction () {
    return 1;
};

// If we're running under Node, 
if(typeof exports !== 'undefined') {
    exports.testFunction = testFunction;
};


