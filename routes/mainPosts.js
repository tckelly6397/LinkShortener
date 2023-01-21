var express = require('express');
var router = express.Router();

router.post('/newLink', function(req, res, next) {  
    console.log(req.params.link);
    res.json({
        "name": "response: " + req.params.link
    });
});

module.exports = router;