angular.module('app')
    .directive('uiDialog', [
        '$translate',
        function($translate) {
            return {
                restrict: 'E',
                replace: true,
                transclude: {
                    footer: '?uiDialogFooter'
                },
                scope: {
                    name: '@',
                    title: '@'
                },
                templateUrl: '/static/apps/admin/lib/directives/ui-dialog.html',
                link: function(scope, elem, attrs, ctrl, $transclude) {
                    scope.hasFooter = $transclude.isSlotFilled('footer');
                    // NOTE: the following code is to share the controller scope for body and footer instead of ng-transclude
                    $transclude(scope.$parent, function(content) {
                        elem.find('.modal-body').append(content);
                    });
                    $transclude(scope.$parent, function(content) {
                        var elemFooter = elem.find('.modal-footer');
                        elem.find('.modal-footer').append(content);
                    }, null, "footer");
                }
            }
        }
    ]);