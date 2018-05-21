const { ObjectID } = require('mongodb');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const _ = require('lodash');

var User = mongoose.model('users');
var { authenticate } = require('../.././middleware/authenticate');


exports.registerUser = function (req, res) {
    var body = _.pick(req.body, ['name', 'email', 'password', 'phone_number']);
    var new_user = new User(body);

    new_user.save()
        .then((new_user) => {
            return new_user.generateAuthToken(new_user.password);
        }).then((token) => {
            var userRes = {
                _id: new_user._id,
                email: new_user.email,
                name: new_user.name,
                phone_number: new_user.phone_number,
                accessToken: token
            };
            res.header('x-auth', token)
            res.json({'newUser': userRes, 'msg': 'SUCCESS'});
            res.end();
        }).catch((e) => {
            res.json({ 'newUser': null, 'msg': 'FAIL' });
            res.end();
        });
};


exports.login = function (req, res) {
    console.log('login');

    var body = _.pick(req.body, ['email', 'password']);
    console.log(body);
    var user = new User(body);
    User.findByCredentials(user.email, user.password)
        .then((user) => {
            user.generateAuthToken().then((token) => {
                var userRes = {
                    _id: user._id,
                    email: user.email,
                    name: user.name,
                    phone_number: user.phone_number,
                    accessToken: token
                };
                res.json({ 'user': userRes, 'msg': 'SUCCESS' });
                res.end();
            });
        }).catch((e) => {
            res.json({ 'user': null, 'msg': 'FAIL' });
            res.end();
        });
};

exports.getUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
        res.end();
    });
};

exports.updateUser = function (req, res) {
    var id = req.params.userId;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    var updatedUser = _.pick(req.body, ['name', 'address', 'phone_number']);
    if (updatedUser.password !== undefined) {
        updatedUser.password = bcrypt.hashSync(updatedUser.password);
    }
    User.findOneAndUpdate({ _id: id }, updatedUser, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
        res.end();
    });
};


