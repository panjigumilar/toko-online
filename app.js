var express = require("express");
var path = require('path');
var mongoose = require('mongoose');
// Initial app
var app = express();

// View engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// setup public folder
app.use(express.static(path.join(__dirname,'public')));
//connetion syntax
mongoose.connect('mongodb://localhost/toko-online');
var db=mongoose.connection;
db.on('error',console.error.bind(console,"connection error :"));
db.once("open",function(){
    console.log("Sudah Connect ke mongodb");
})

// setup index
app.get('/', function(req,res){
    res.send('Ini adalah index , sudah konek ke mongo tes'); 
});


// Setup server
var port = 3000;
app.listen(port,function(){
    console.log('Server Running on port '+port);
});