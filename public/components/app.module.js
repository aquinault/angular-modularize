// Create a new module
var appModule = angular.module('app.module', ['ui.router', 'underscore.module', 'header.module', 'dashboard.module', 'cover.module', 'menu.module']);

appModule.run(function($rootScope) {
    console.log('appModule run');
});

appModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    console.log('appModule config');

    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/cover");
  
}]);
