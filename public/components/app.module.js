// Create a new module
var appModule = angular.module('app.module', ['ngRoute', 'underscore.module', 'header.module', 'dashboard.module']);

appModule.run(function($rootScope) {
    console.log('run');

    msg = {
        name: 'Home',
        url: 'cover',
        index: 0
    };

    $rootScope.$broadcast('AddItemHeader', msg);

});

appModule.config(['$routeProvider', function($routeProvider) {
    console.log('config');
    
/*    
    $routeProvider.when('/cover', {
        templateUrl: '/components/cover/cover.html',
        controller: 'cover.controller'
    });
*/

    /*    $routeProvider.when('/', {
        redirectTo: '/cover'
    }).otherwise({
        redirectTo: '/'
    });
    */
}]);
