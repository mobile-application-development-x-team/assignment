'use strict';
const _ = require('lodash');
var { authenticate } = require('../../middleware/authenticate');

var urldetail = "/users";

module.exports = function (app) {
    var userController = require('../controllers/UserController');

    app.route(urldetail + '/:userId')
        .get(userController.getUser)
        .put(userController.updateUser);

    app.post(urldetail + '/register', userController.registerUser);
    app.post(urldetail + '/login',userController.login);

};