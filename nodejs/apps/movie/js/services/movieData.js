(function() {
    var movieData = function($http, $q) {

        var movies = [];

        var save = function(movie) {
            return $http.put('/api/movies/', movie);
        };

        var getAll = function() {

            // TODO: implement simple caching
            //if(movies.length > 0) {
                //return $q.when(movies);
            //}

            return $http.get("/api/movies")
                .then(function(response) {
                    movies = response.data;
                    return movies;
                });
        };

        var getById = function(id) {
            return $http.get('/api/movies/' + id)
                .then(function(response) {
                    return response.data;
                });
        };

        var add = function(movie) {
            return $http.post('/api/movies/', movie)
                .then(function(response) {
                    movies.push(response.data);
                    return response.data;
                });
        };

        var deleteF = function(id) {
            return $http.delete('/api/movies/' + id)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAll: getAll,
            getById: getById,
            save: save,
            add: add,
            delete: deleteF
        };
    };

    var app = angular.module('moviesApp');
    app.factory('movieData', movieData);
}());
