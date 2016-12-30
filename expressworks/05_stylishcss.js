var stylus = require('stylus')
var express = require('express');
var app = express();

app.use(stylus.middleware({
      src: process.argv[3] //path to .styl files
    , dest: __dirname //path to compiled .css files
    , compile: function(str, path) { // optional, but recommended
		return stylus(str)
		.set('filename', path)
		.set('warn', true)
		.set('compress', false);
	}
  }));

app.use(express.static(__dirname));
app.listen(process.argv[2]);