const http = require('http');
const request = require('request');

var r = request.post('http://localhost:8099');
process.stdin.on('error',handleError);
process.stdin.pipe(r).pipe(process.stdout);

function handleError(err){
    console.log(err);
}