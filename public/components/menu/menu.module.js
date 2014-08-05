// Create a new module
var menuModule = angular.module('menu.module', ['famous.angular']);

menuModule.run(function($rootScope, _) {
    console.log('menuModule run');

    var msg = {
        name: 'Menu',
        url: 'menu',
        index: 30
    };

    $rootScope.$broadcast('AddItemHeader', msg);
});

menuModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    console.log('menuModule config');

    //
    // Now set up the states
    $stateProvider.state('menu', {
        url: "/menu",
        controller: 'menuModule.controller',
        templateUrl: "components/menu/menu.html"
    });
}]);


menuModule.controller('menuModule.controller', ['$rootScope', '$scope', '$famous', function($rootScope, $scope, $famous) {
    console.log('menuModule controller');

    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.evt = new EventHandler();

    $scope.flip = function() {
        $famous.find('#flipper')[0].flip();
    }
}]);
