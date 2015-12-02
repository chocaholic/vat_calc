//Requirements
var express = require('express');
var ejsEngine = require("ejs-locals");
var http = require('http');
		
//Declarations
var app = express();
var port = 80;

//View Engine
app.engine("html", ejsEngine);
app.set("view engine", "ejs");

//Set Static Routes
app.use(express.static(__dirname + "/www"));


var httpServer = http.createServer(app);

httpServer.listen(process.env.PORT, function(){
    console.log('Running on PORT: ' + port);
});