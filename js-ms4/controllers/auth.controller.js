function AuthController() {
    var roles;
    function setRoles(role) {
        roles = role;        
    }
    function isAuthorized(neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorizedAsync(neededRole, cb) {
        setTimeout(() => {cb(roles.indexOf(neededRole) >= 0)}, 10);
    }

    function isAuthorizedPromise(neededRole) {
        return new Promise(function (resolve) {
            setTimeout(() => {resolve(roles.indexOf(neededRole) >= 0)}, 10);            
        })

    }

    return {isAuthorized, isAuthorizedAsync, setRoles, isAuthorizedPromise};
}

module.exports = AuthController();