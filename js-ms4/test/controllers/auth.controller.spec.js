const assert = require('assert');
const authController = require('../../controllers/auth.controller'); 
const expect = require('chai').expect;

describe('AuthController', function () {
    beforeEach('Setup user roles',function settingUpRoles() {
        console.log("Running before each");
        authController.setRoles(['user']);
        
    })

    describe('Role Management', () => {
        it('Should revoke roles')
        it('Should append roles')
        it('Shoud set roles')
    })
    describe('isAuthorized', function () {
        
        it('Should return false if not authorized', function(){
            //authController.setRoles(['user']);
            const isAuth = authController.isAuthorized( 'admin');
            
            expect(isAuth).to.be.false;
        })

        it('Should return true if authorized', function(){
            authController.setRoles(['user','admin']);
            const isAuth = authController.isAuthorized( 'admin');
            //assert.equal(true, isAuth);
            expect(isAuth).to.be.true;
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
});