(function() {
    var MainController = function(movieData, $location) {
        var self = this;

        //throw new Error('Error due to stupidity');

        self.searchTerm = '';
        self.orderOptions = [
            { name: 'Title', option: '+title' },
            { name: 'Year', option: '+year' },
            { name: 'Worst', option: '+rating' },
            { name: 'Best', option: '-rating' }
        ];
        self.orderTerm = self.orderOptions[3].option;


        movieData.getAll()
            .then(function(movies) {
                self.movies = movies;
            }, function(response) {
                self.error = "No movies found";
            });

        this.rateMovie = function(movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 3
            };
        };

        this.gotoMovie = function(index) {
            var id = self.movies[index].id;
            $location.path('/details/' + id);
        };

        this.message = {
            greeting: 'Hello World',
            currentWeather: 'Cold'
        };

        this.changeMessage = function() {
            this.message.greeting = 'Hello, Switzerland';
            this.message.currentWeather = 'warming up';
        };
    };

    var app = angular.module('moviesApp');
    app.controller('MainController', MainController);
}());
