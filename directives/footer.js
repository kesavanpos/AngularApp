
myApp.directive("footer", function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'views/footer.html',
        controller: ['$scope', '$filter', function ($scope, $filter) {
        }]
    }
})