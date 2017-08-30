let express = require('express');

var app = express();


app.get('/api/stuff', function (req, res, next) {
    req.query // <- Is an object
    //The keys of the object come from the URL after the ?
    //Which URL, the actual url used to invoke
    //req.body, req.params, req.query are the 3 ways to get information from the server

    //What the keys for the following URLs, and what will their values be

    //http://someurl.com/api/stuff?name=bob&species=skull
    req.query.name //bob
    req.query.species //skull


    //http://someurl.com/api/stuff?name=fuego&element=fire&power=11
    req.query.name //fuego
    req.query.element //fire
    req.query.power //11
})

app.get('/api/spells/:name/:element/:power')
app.get('/api/spells/:element')
//now can't add another like app.get('/api/spells/:name')

app.get('/api/clothing/:category', function (req, res, next) {
    //Identify all the data you can get out of the URL

    //http://someurl.com/api/clothing/socks?color=purple
    req.params.category //socks
    req.query.color // purple


    //http://someurl.com/api/clothing/shirts?size=medium&fabric=cotton&animal=wolf
    req.params.category //shirts
    req.query.size //medium
    req.query.fabric //cotton
    req.query.animal //wolf
})