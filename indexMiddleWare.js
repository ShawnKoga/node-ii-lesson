let express = require('express');
let bodyParser = require('body-parser');

var app = express();

app.get('/api/stuff', function(req,res,next) { }, function(req, res, next){ }) //...can have as many functions as we want

app.get('/api/stuff', function(req,res,next) { 
    // Changes made to req here exist on req in the next function
    req.potato = true
    // next() <- This is the trigger to move on to the NEXT function in the chain
    next(); // You must call next in any middleware
    //OR call res.send/end/json/etc
}, function(req, res, next){ 
    req.potato // <- is true
    // Changes made to req in the previous function exist here
    // You don't need to call next in the last function
    // You must call res.send/end/json in the last function
}) //...You could add as many functions here as you want


function inlineMiddleware(req, res, next){ //Uses the same parameters
    next();
}

app.get('/api/stuff', inlineMiddleware, function(req, res, next){ 
    //indlineMiddleware is called first
    //this anonymous function is called next
}) 



function isLoggedIn(req, res, next) {
    if(userIsLoggedIn() === true) {
        next();;
    } else {
        res.redirect('/login');
    }
}

function isAdmin(req,res, next) {
    if(userIsAdmin === true) {
        next();
    } else {
        res.redirect('/notauthorizedyousneakyperson')
    }
}

app.get('/api/secretinfos', isLoggedIn, isAdmin, function(req, res, next) {
    res.json('secret Infos. shhhh')
})

app.get('/api/userInfos', isLoggedIn, function (req, res, next) {
    res.json('User Infos!!!!!')
})




app.use(bodyParser.json());

// app.use(function(req,res,next){
//     console.log(req.params);
//     next();
// })

app.get('/api/stuff', inlineMiddleware, function(req, res, next){ 
    //Body-parser is called first
    //then inlineMiddleware
    //then this anonymous function
}) 