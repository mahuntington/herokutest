var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/herokutest';

var Person = mongoose.model('Person', {
   name:String
});

app.get('/', function(req, res){
    Person.create({name:'matt'}, function(){
        res.send('works');
    })
})

mongoose.connect(mongoDBURI);

mongoose.connection.once('open', function(){
    console.log('connected mongod');
})

app.listen(port, function(){
    console.log('listening on port ' + port);
})
