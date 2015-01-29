(function() {
    var DetailsController = function(movieData, $routeParams, errors) {
        var self = this;

        var id = $routeParams.id;
        movieData.getById(id)
            .then(function(movie) {
                self.movie = movie;
            })
            .catch(errors.handle('Could not fetch the movie'));
    };

    var app = angular.module('moviesApp');
    app.controller('DetailsController', DetailsController);
}());
