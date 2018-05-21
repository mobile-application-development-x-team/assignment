
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 8008;
var bodyParser = require('body-parser');
var cors = require('cors');

var url = 'mongodb://user:123456@ds157631.mlab.com:57631/shop';
var User = require('./api/models/UserModel');

mongoose.Promise = global.Promise;
mongoose.connect(url, (err) => {
    if (err)
        console.error(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoute = require('./api/routes/UserRoute');
userRoute(app);

var productRoute = require('./api/routes/ProductRoute');
productRoute(app);

var productTypeRoute = require('./api/routes/ProductTypeRoute');
productTypeRoute(app);

var billRoute = require('./api/routes/BillRoute');
billRoute(app);

app.listen(port, () => {
    console.log('access http://localhost:' + port);
})