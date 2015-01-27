(function(module) {

    var stars = function($sce) {
        return function(value) {
            var result = '';
            for(var i = 0; i < value; i++) {
                result += '<span class="glyphicon glyphicon-star" aria-hidden="true"></span>';
            }
            return result;
        };
    };

    module.filter("stars", stars);

}(angular.module('moviesApp')));
