(function(module) {

    var stars = function($log) {
        return function(value) {
            var result = '';
            for(var i = 0; i < value; i++) {
                result += '*';
            }
            return result;
        };
    };

    module.filter("stars", stars);

}(angular.module('moviesApp')));
