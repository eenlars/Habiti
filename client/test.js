var http = require('http');
var port = 3000;
var url = require('url');
var express = require("express");
var app = express();

app.use(express.static(__dirname +'/client'));
http.createServer(app).listen(port);
