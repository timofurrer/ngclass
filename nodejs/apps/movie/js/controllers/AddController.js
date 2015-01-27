(function(module) {
    var AddController = function(movieData, $log, $location) {
        var self = this;

        self.movie = {
            title: '', year: '', rating: ''
        };

        self.save = function(isValid) {
            $log.info('saving new movie');
            if(isValid) {
                $log.info('data for new movie is valid');
                movie = movieData.add(self.movie);
                $location.path('/list');
            }
        };

        self.goToList = function() {
            $location.path('/list');
        };
    };

    module.controller('AddController', AddController);
}(angular.module('moviesApp')));
