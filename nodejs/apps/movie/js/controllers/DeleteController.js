(function(module) {
    var DeleteController = function(movieData, $routeParams, $log, $location) {
        var self = this;
        var id = $routeParams.id;

        movieData.getById(id).then(function(movie) {
            self.movie = movie;
        });

        self.delete = function() {
            $log.info('Ask for permission to delete movie');
            movieData.delete(id);
            self.goToList();
        };

        self.goToList = function() {
            $location.path('/list');
        };
    };

    module.controller('DeleteController', DeleteController);
}(angular.module('moviesApp')));
