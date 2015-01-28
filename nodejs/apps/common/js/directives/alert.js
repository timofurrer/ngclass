(function(module) {

    var alert = function() {

        // DDO (directive dinfition object
        return {
            restrict: 'E',
            templateUrl: '/common/templates/alert.html',
            transclude: true,
            scope: {
                // this is an isolated scope
                type: '@',
                reason: '=',
                close: '&'
            },
            //link: function(scope, element, attributes) {
                ////var type = attributes.type || 'warning';
                ////element.children().addClass('alert alert-' + type);

                ////var closeSpan = element[0].querySelector('span.close');
                ////angular.element(closeSpan).on('click', function() {
                    ////element.remove();
                ////});
            //}
        };
    };

    module.directive('alert', alert);
}(angular.module('common')));
