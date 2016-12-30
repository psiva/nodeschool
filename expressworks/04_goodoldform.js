var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// Get the urlencoded parser to parse the body.
var urlencodedParser = bodyParser.urlencoded({extended:false});

//Let express know that we need to use urlencodedParser as the middleware
app.use(urlencodedParser);

app.post('/form',function(req,res){
    res.send(req.body.str.split('').reverse().join(''));
})

app.listen(process.argv[2]);