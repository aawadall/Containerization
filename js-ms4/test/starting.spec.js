const assert = require('assert');
const should = require('chai').should();

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
      const iAmNull = null;
      should.not.exist(iAmNull);
      //iAmNull.should.not.exist;
   })
});