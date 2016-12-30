var trumpet = require('trumpet');
var through2 = require('through2');

var tr = trumpet();

tr.pipe(process.stdout);

tr.select('.loud',function(loud){
    var stream = loud.createStream();
    stream.pipe(through2(function(chunk,enc,next){
        this.push(chunk.toString().toUpperCase());
        next();
    })).pipe(stream);
});

process.stdin.pipe(tr);