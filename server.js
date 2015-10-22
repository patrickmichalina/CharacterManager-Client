var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var compression = require('compression');
var favicon = require('serve-favicon');

var oneDay = 86400000;
var publicFolder = '/dist/'

app.use(compression());
app.use(favicon(__dirname + publicFolder + 'favicon.ico'));
app.use(express.static(__dirname + publicFolder, { maxAge: oneDay }));

app.all('/*', function (req, res, next) {
  res.sendfile('index.html', { root: __dirname + '/dist' });
});

app.listen(port);