var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.all('/*', function(req, res) {
  res.sendFile('index.html', {root: __dirname + '/app'});
});

var server = app.listen(3000);
