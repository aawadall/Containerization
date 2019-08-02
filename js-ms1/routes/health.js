var express = require('express');
var router = express.Router();

router.get('/health',  (get, res, next) =>{
    res.send({
        status: 'healthy'
    });
});

module.exports = router;