(function(module) {
    var requestCounter = function($q) {

        var currentRequestCount = 0;

        var request = function(config) {
            currentRequestCount++;
            return $q.when(config);
        };

        var error = function(reason) {
            currentRequestCount--;
            return $q.reject(reason);
        };

        var response = function(httpResponse) {
            currentRequestCount--;
            return $q.when(httpResponse);
        };

        var getCount = function() {
            return currentRequestCount;
        };

        return {
            request: request,
            requestError: error,
            response: response,
            responseError: error,
            getCurrentRequestCount: getCount
        };
    };

    module.factory('requestCounter', requestCounter);
    module.config(function($httpProvider) {
        $httpProvider.interceptors.push('requestCounter');
    });
}(angular.module('common')));
