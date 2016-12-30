const concat = require('concat-stream');

process.stdin.on('error',handleError);

process.stdin.pipe(concat(function(data){
    data =  data.toString().split('').reverse().join('');
    process.stdout.write(data);
}))

function handleError(err){
    console.log(err);
    process.exit(1);
}