(function() {

    var baseUrl = '';
    var module = angular.module('common');

    var movieData = function($http, $q) {

        var movies = [];

        var save = function(movie) {
            return $http.put(baseUrl, movie);
        };

        var getAll = function() {

            // TODO: implement simple caching
            //if(movies.length > 0) {
                //return $q.when(movies);
            //}

            return $http.get(baseUrl)
                .then(function(response) {
                    movies = response.data;
                    return movies;
                });
        };

        var getById = function(id) {
            return $http.get(baseUrl + id)
                .then(function(response) {
                    return response.data;
                });
        };

        var add = function(movie) {
            return $http.post(baseUrl, movie)
                .then(function(response) {
                    movies.push(response.data);
                    return response.data;
                });
        };

        var deleteF = function(id) {
            return $http.delete(baseUrl + id)
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

    module.config(function($provide) {
        $provide.provider('movieData', function() {

            this.setBaseUrl = function(newUrl) {
                baseUrl = newUrl;
            };

            this.$get = movieData;

        });
    });

    var app = angular.module('common');
    app.factory('movieData', movieData);
}());
