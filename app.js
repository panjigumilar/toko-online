var express = require("express");
var path = require('path');

// Initial app
var app = express();

// View engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// setup public folder
app.use(express.static(path.join(__dirname,'public')));

// setup index
app.get('/', function(req,res){
    res.send('Ini adalah index yo');
});
// Setup server
var port = 3000;
app.listen(port,function(){
    console.log('Server Running on port '+port);
});