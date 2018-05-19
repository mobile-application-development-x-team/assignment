
const _ = require('lodash');

var Job = require('../models/JobModel');

// get all jobs
exports.getListJobs = function (req, res) {
    Job.find({}, function (err, jobs) {
        if (err)
            res.send(err);
        res.send(jobs);
        res.end();
    });
};

// get job via key_search(place)
exports.getListJobByPlace = function (req, res) {
    var key = req.params.key;
    Job.find({ place: new RegExp(key, "i") }, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

//get job via key_search(sub key in title)
exports.getListJobBySubKeyTitle = function (req, res) {
    var key = req.params.key;
    Job.find({ title: new RegExp(key, "i") }, function (err, results) {
        if (err)
            res.send(err);
        res.send(results);
        res.end();
    });
};

// get favorited jobs
exports.getFavoriteJob = function (req, res) {
    Job.find({ favorited: true }, function (err, favoritedJobs) {
        if (err)
            res.send(err);
        res.send(favoritedJobs);
        res.end();
    });
};

// update favorited job (!favorited or favorited)
exports.updateFavoritedJob = function (req, res) {

    Job.update({ _id: req.params.id }, {$set: {favorited: req.params.favorited}} , function (err, job) {
        if (err)
            res.send(err);
        res.json({'msg': 'SUCCESS'}); 

        res.end()

    });
}
