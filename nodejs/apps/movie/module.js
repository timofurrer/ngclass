(function(undefined) {
    var module = angular.module('moviesApp', ['ng', 'ngRoute', 'ngMessages']);
    module.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/movie/templates/list.html',
            })
            .when('/details/:id', {
                templateUrl: '/movie/templates/details.html'
            })
            .when('/edit/:id', {
                templateUrl: '/movie/templates/edit.html'
            })
            .otherwise({'redirectTo': '/list'});
    });
}());
