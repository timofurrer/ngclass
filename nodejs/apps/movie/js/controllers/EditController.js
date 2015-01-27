(function(module) {

    var EditController = function(movieData, $routeParams, $log, $location) {
        var self = this;
        var id = $routeParams.id;

        movieData.getById(id).then(function(movie) {
            self.movie = movie;
            self.originalMovie = angular.copy(self.movie);
        });

        var goToDetails = function() {
            $location.path('/details/' + self.movie.id);
        };

        self.save = function(isValid) {
            $log.info("Saving movie");
            if(isValid) {
                $log.info("Data is valid");
                movieData.save(self.movie).then(goToDetails);
            }
        };

        self.reset = function() {
            $log.info("resetting movie");
            self.movie = self.originalMovie;
        }
    };

    module.controller('EditController', EditController);
}(angular.module('moviesApp')));
