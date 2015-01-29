(function(module) {
    var RatingController = function(movieData, $log) {
        var self = this;

        self.movie = {};
        self.stars = new Array(5);
        self.previewIndex = null;

        self.init = function(movie) {
            $log.info('give ' + movie.rating + ' stars');
            self.movie = movie;
        };

        self.applyClasses = function(index) {
            return {
                'glyphicon': true,
                'glyphicon-star': (self.previewIndex !== null && index < self.previewIndex) || index < self.movie.rating,
                'glyphicon-star-empty': (self.previewIndex !== null && index >= self.previewIndex) || (self.previewIndex === null && index >= self.movie.rating)
            };
        };

        self.setRating = function(index) {
            self.movie.rating = index + 1;
            movieData.save(self.movie)
                .then(function(response) {
                    $log.info('saved rating of movie ' + self.movie.title);
                });
        };

        self.preview = function(index) {
            self.previewIndex = index + 1;
        };

        self.unpreview = function(index) {
            self.previewIndex = null;
        };
    };

    module.controller('RatingController', RatingController);
}(angular.module('common')));
