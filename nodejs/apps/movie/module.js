(function(undefined) {
    var module = angular.module('moviesApp', ['ng', 'ngRoute', 'ngMessages', 'ngSanitize']);
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
            .when('/add', {
                templateUrl: '/movie/templates/add.html'
            })
            .when('/delete/:id', {
                templateUrl: '/movie/templates/delete.html'
            })
            .otherwise({'redirectTo': '/list'});
    });
}());
