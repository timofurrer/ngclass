(function(module) {

    var errors = function($injector) {
        var currentErrors = [];

        var addError = function(message) {
            currentErrors.push(message);
            var timeout = $injector.get('$timeout');
            timeout(removeError(message), 10000);
        };

        var removeError = function(message) {
            return function() {
                for(var i = 0; i < currentErrors.length; i++) {
                    if(currentErrors[i] === message) {
                        currentErrors.slice(i, 1);
                        break;
                    }
                }
            };
        };

        var getCurrentErrors = function() {
            return currentErrors;
        };

        return {
            addError: addError,
            getCurrentErrors: getCurrentErrors
        };
    };

    module.factory('errors', errors);

}(angular.module('moviesApp')));
