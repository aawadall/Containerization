var assert = require('assert');
var authController = require('../../controllers/auth.controller'); 
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinon = require('sinon');

chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {
    beforeEach('Setup user roles',function settingUpRoles() {
        //console.log("Running before each");
        authController.setRoles(['user']);
        
    })

    describe('isAuthorized', function () {
        var user = {};

        this.beforeEach(function () {
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
            sinon.spy(user, 'isAuthorized');
            authController.setUser(user);
        });
        it('Should return false if not authorized', function(){
            //authController.setRoles(['user']);
            const isAuth = authController.isAuthorized( 'admin');
            console.log( user.isAuthorized);
            console.log( user.isAuthorized.getCall(0));
                        
            isAuth.should.be.false;            
            user.isAuthorized.calledOnce.true;
        })

        it('Should return true if authorized', function(){
            user.roles = ['user','admin'];
            authController.setUser(user);
            const isAuth = authController.isAuthorized( 'admin');
            isAuth.should.be.true;
        })

    })
    
    describe('isAuthorizedAsync',  () => {
        it('Should return false if not authorized', function(done) {
            
            this.timeout(2500);
            authController.isAuthorizedAsync(
                    'admin', 
                    (isAuth) =>{
                        assert.equal(false, isAuth);
                        done();
                });
            })

        it('Should return true if  authorized', function(done) {
            authController.setRoles(['user','special']);
            this.timeout(5000);
            authController.isAuthorizedAsync(                    
                    'special', 
                    (isAuth) =>{
                        assert.equal(true, isAuth);
                        done();
                });
            })    
    })

    describe('isAuthorizedPromise',  function() {
        it('Should return false if not authorized', function(done) {
            done();
            return authController
                .isAuthorizedPromise('admin')
                .should
                .eventually
                .be
                .false;
            })
    })

    describe.only('getIndex', function () {
        
        var user = {};
        beforeEach(function () {
            
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
 
        });

        it('Should render index if authorized', function () {
            var isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            var req = {user: user};
            var res = {
                render: function(){}
            };
            var mock = sinon.mock(res);
            mock.expects('render').once().withExactArgs('index');
            authController.getIndex(req, res);
            //console.log(res.render);
            isAuth.calledOnce.should.be.true;
            mock.verify();
        })

        it('Should render notAuthorized if not authorized', function () {
            var isAuth = sinon.stub(user, 'isAuthorized').returns(false);
            var req = {user: user};
            var res = {
                render: sinon.spy(),
            };
            authController.getIndex(req, res);
            
            isAuth.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('notAuthorized');
        })

        it('Should render error if error', function () {
            var isAuth = sinon.stub(user, 'isAuthorized').throws();
            var req = {user: user};
            var res = {
                render: sinon.spy(),
            };
            authController.getIndex(req, res);
            //console.log(res.render);
            isAuth.calledOnce.should.be.true;
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('error');
        })

    })
});