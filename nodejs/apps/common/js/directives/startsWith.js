(function(module) {
    var startsWith = function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attributes, ngModel) {
                var startsWithValue = attributes.startsWith;
                ngModel.$validators.startsWith = function(value) {
                    return value && value[0] === startsWithValue;
                };
            }
        };
    };

    module.directive('startsWith', startsWith);
}(angular.module('common')));
