var fs = require('fs');
var express = require('express');
var router = express.Router();

var linksLocation = "./resources/links.json";

function getKey(length) {
    var id = '';
    var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        id += values.charAt(Math.floor(Math.random() * values.length));
    }

    return id;
}

function createKey(list) {
    let key = getKey(5);

    for(let i = 0; i < list.length; i++) {
        let listElement = list[i];

        if(listElement["key"] == key) {
            key = getKey(5);
        }
    }

    return key;
}

router.post('/newLink', function(req, res, next) {  
    let link = req.body.link;
    
    //Handle adding the link to the json file
    //Get the link list
    let linkList = JSON.parse(fs.readFileSync(linksLocation));

    //Create a key
    let key = createKey(linkList);

    //Save the link to the key
    let data =
      {
        "key": key,
        "link": link
      } 

    linkList.push(data);

    fs.writeFileSync(linksLocation, JSON.stringify(linkList));

    res.json({
        "key": key 
    });
});

module.exports = router;