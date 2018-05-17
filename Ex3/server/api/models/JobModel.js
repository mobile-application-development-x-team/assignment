var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
    title: String,
    place: String,
    image: String,
    description: String,
    favorited: {
        type: Number,
        default: 0
    }
});

var Job = mongoose.model('jobs', JobSchema);
module.exports = Job;