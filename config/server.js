var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var server = express();

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());
server.use(expressValidator());

consign()
    .include('./v1/routes')
    .then('config/dbConnection.js')
    .then('v1/models')
    .then('v1/controllers')
    .into(server);

module.exports = server;