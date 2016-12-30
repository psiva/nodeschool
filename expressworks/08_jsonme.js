const express = require('express');
const fs = require('fs');

var app = express();

app.get('/books',function(req,res){

    fs.readFile(process.argv[3],function(err,data){
        if(err) res.sendStatus(500);

        res.json(JSON.parse(data.toString()));

    })
    
})

app.listen(process.argv[2]);