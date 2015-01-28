(function(module) {
    var rating = function() {
        return {
            restrict: 'E',
            templateUrl: '/common/templates/rating.html',
            scope: {
                movie: '='
            },
            controller: 'RatingController as rating',
            link: function(scope, element, attributes, controller) {
                controller.init(scope.movie);
            }
        };
    };

    module.directive('rating', rating);
}(angular.module('common')));
