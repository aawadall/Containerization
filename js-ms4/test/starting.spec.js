const assert = require('assert');

describe('Basic Mocha Test', function () {
   it('should deal with objects', function() {
       var obj = {
          name: 'some name',
          age: 111
       };

       var secondObject = {
         name: 'some name',
         age: 111
      };

       //obj.should.have.property('name').equal('other name');
       obj.should.deep.equal(secondObject);
   });

   it('should check for nulls', function () {
      
   })
});