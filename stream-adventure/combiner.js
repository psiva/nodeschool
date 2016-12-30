const combine = require('stream-combiner');
const through = require('through2');
const gzip = require('zlib');

module.exports = function(){
    
    var result="";
    var groups;
    var input = through();

    var tr = through(write,end);

    function write(data,enc,next){
          if(data.length===0) return;
          var obj = JSON.parse(data);
         
          if(obj.type=="genre")
          {
                if(groups)
                {
                    result = result+JSON.stringify(groups)+"\n";
                }
                groups = {};
                groups.name = obj.name;
                groups.books =[];
         }
         else if(obj.type=="book")
         {
             groups.books.push(obj.name);
         }
         next();
    }

    function end(done){
        result = result+JSON.stringify(groups)+"\n";
        this.push(result);
        done();
    }

    return combine(input,tr,gzip.createGzip());
}