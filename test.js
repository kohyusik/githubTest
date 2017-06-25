/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/example');
var http = require('http');
var path = require('path');


var app = express();
app.use(express.static(path.join(__dirname, 'public')));



console.log('test1');
console.log('Login!');

console.log('master branch main logic');




