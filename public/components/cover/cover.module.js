// Create a new module
var coverModule = angular.module('cover.module', []);

coverModule.run(function($rootScope, _) {
    console.log('run');
});

coverModule.config(['$routeProvider', function($routeProvider) {
    console.log('config');

    $routeProvider.when('/cover', {
        templateUrl: '/components/cover/cover.html',
        controller: 'cover.controller'
    });

}]);

coverModule.controller('cover.controller', ['$rootScope', '$scope', function($rootScope, $scope) {

}]);
