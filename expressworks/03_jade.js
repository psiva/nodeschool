var express = require('express');
var app = express();

// Set the template engine
// Sample template engines are jade(pug),ejs,handlebars etc;
app.set('view engine', 'jade');

// Let express know where to find the template files
app.set('views',process.argv[3]);

app.get('/home', function(req,res){
    // render the template and pass the required data
    res.render('index',{date:new Date().toDateString()});
})

app.listen(process.argv[2]);