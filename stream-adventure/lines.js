var through2 = require('through2');
var split = require('split');

var stream = through2(write,end);
var counter = 0;

function write(chunk,enc,next){
    counter++;
    if(counter%2===0){
        chunk = chunk.toString().toUpperCase()+'\n';
    } else{
        chunk = chunk.toString().toLowerCase()+'\n';
    }
    this.push(chunk);
    next();

}

function end(done){
    done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);