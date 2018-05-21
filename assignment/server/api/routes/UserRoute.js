'use strict';
const _ = require('lodash');
var { authenticate } = require('../../middleware/authenticate');

var urlUser = "/users";

module.exports = function (app) {
    var userController = require('../controllers/UserController');

    app.route(urlUser + '/:userId')
        .get(userController.getUser)
        .put(userController.updateUser);

    app.post(urlUser + '/register', userController.registerUser);
    app.post(urlUser + '/login',userController.login);

};