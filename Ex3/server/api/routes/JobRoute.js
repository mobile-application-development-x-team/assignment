
var urlBase = '/jobs';

module.exports = function (app) {
    var jobController = require('../controllers/JobController');
    app.get(urlBase, jobController.getListJobs);
    app.get(urlBase + '/search/place/:key', jobController.getListJobByPlace);
    app.get(urlBase + '/search/sub-title/:key', jobController.getListJobBySubKeyTitle);
    app.get(urlBase + '/favorited-jobs', jobController.getFavoriteJob);
    app.post(urlBase + '/favorited-job/:id/:favorited', jobController.updateFavoritedJob);
}