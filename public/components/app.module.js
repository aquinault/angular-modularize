(function() {
    
    // Create a new module
    angular.module('app.module', ['ui.router', 'underscore.module', 'header.module', 'dashboard.module', 'cover.module', 'menu.module', 'gallery.module']);
    
    angular.module('app.module').run(function($rootScope) {
        console.log('appModule run');
    });
    
    angular.module('app.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('appModule config');
    
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/cover");
      
    }]);
    
}());