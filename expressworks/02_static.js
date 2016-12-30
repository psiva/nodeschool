var express = require('express');
var app = express();

// Apply the static middleware.
// use method applies logic (middleware) before the request is processed
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);