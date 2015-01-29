(function(module) {

    var errors = function($injector) {
        var currentErrors = [];



        var addError = function(message) {

            var error = {
                type: 'danger',
                message: message,
                reason: ''
            };

            currentErrors.push(error);
            //var timeout = $injector.get('$timeout');
            //timeout(removeError(error), 10000);
        };

        var handle = function(message) {
            return function(reason) {
                addError(message);
            };
        };

        var removeError = function(error) {
            return function() {
                for(var i = 0; i < currentErrors.length; i++) {
                    if(currentErrors[i] === error) {
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
            removeError: removeError,
            getCurrentErrors: getCurrentErrors,
            handle: handle
        };
    };

    module.factory('errors', errors);

}(angular.module('moviesApp')));
