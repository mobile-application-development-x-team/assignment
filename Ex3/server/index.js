var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3003;
var bodyParser = require('body-parser');
var cors = require('cors');

var url = 'mongodb://exercise:123456@ds249299.mlab.com:49299/exercise';

mongoose.Promise = global.Promise;
mongoose.connect(url, function(err){
    if(err)
        console.log(err);
    console.log('CONNECTED DATABASE');
});

var jobRoute = require('./api/routes/JobRoute');
jobRoute(app);

app.listen(port, function(){
    console.log("ACCESS http://localhost:" + port);
});
