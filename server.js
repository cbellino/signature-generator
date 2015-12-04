/* jshint esnext: true */

'use strict';

var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var server = express();

const ENV                  = process.env.ENV || 'dev';
const PORT                 = process.env.PORT || 5000;
const APP_DEST             = `dist/${ENV}`;

server.use(morgan('dev'));
server.use(gzippo.staticGzip(__dirname + '/' + APP_DEST));
server.listen(PORT || 5000, () =>
  console.log('-> Serving app: http://localhost:' + PORT)
);
