var fs = require('fs');
var express = require('express');
var router = express.Router();

var linksLocation = "./resources/links.json";

function getLink(key, list) {
    for(let i = 0; i < list.length; i++) {
        let listElement = list[i];

        if(listElement["key"] == key) {
            return listElement["link"]
        }
    }

    return false;
}

router.get('/:link', function(req, res, next) {
    let key = req.params.link;

    //Get the link list
    let linkList = JSON.parse(fs.readFileSync(linksLocation));

    let link = getLink(key, linkList);
    if(link != undefined) {
        res.redirect(link);
    } else {
        res.json({
            "response": "invalid link"
        });
    }
});

module.exports = router;