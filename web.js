var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser')

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.listen(process.env.PORT || 5000);

app.get("/", function(req, res) {

  if (!req.query || !req.query.data) {
    res.writeHead(400);
    res.end();
    return;
  }

  var data = req.query.data.replace('data:image/png;base64,', '');
  var img = new Buffer(data, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': img.length
  });
  res.end(img);
});
