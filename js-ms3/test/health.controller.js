import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Health', () => {
  it('should check path for health check', () =>
    request(Server)
      .get('/api/v1/health')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('status')
          .equal('running');
      }));
});
