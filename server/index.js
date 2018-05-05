var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'username',
    password: '1234!@#',
    insecureAuth: true
});

var app = express();

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        throw err
        console.log("Error connecting database ... nn");
    }
});

app.get("/", function (req, res) {
    connection.query('SELECT * from tests LIMIT 2', function (err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
});

app.listen(3000);