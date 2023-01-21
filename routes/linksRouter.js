var express = require('express');
var router = express.Router();

router.get('/:link', function(req, res, next) {  
    res.json({
      "response": req.params.link
    });
});

module.exports = router;