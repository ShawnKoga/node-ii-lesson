let express = require('express');
let session = require('express-session'); //npm install express-session

var app = express();
app.use(session({
    secret: 'IRolledMyFaceOnTheKeyboard'
}))

app.get('/api/endpoint1', function(req, res, next){
    req.session.userFav = "spicy jalapenos";
    //Session is an object we can put anything we want on it
    //Sessions are awesome because anything you put on session will be on every req
    //   on every other endpoint that exact same user hits
    //This works through the magic of cookies
})


app.get('/api/endpoint2', function(req, res, next){
    //Assuming endpoint1 was hit before endpoint2
    //Then
    req.session.userFav // has a value of "spicy jalapenos"
})