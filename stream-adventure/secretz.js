const crypto = require('crypto');
const tar = require('tar');
const gzip = require('zlib');

var stream = crypto.createDecipher(process.argv[2],process.argv[3]);
var parser = tar.Parse();
parser.on('entry',function(d){
    var hash = crypto.createHash('md5',{encoding:'hex'});
    var data="";
    if(d.type==='File'){
        d.on('data',function(contents){
            data = data+contents;
        })

        d.on("end", function () {
           hash.update(data);
           console.log(hash.digest('hex')+' '+d.path);
        })
        
    }
    
})
process.stdin.pipe(stream)
             .pipe(gzip.createGunzip())
             .pipe(parser)