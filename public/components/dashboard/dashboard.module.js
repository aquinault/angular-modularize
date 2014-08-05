// Create a new module
var dashboardModule = angular.module('dashboard.module', []);

dashboardModule.run(function($rootScope, _) {	
	console.log('dashboardModule run');

	var msg = {
		name : 'Dashboard',
		url : 'dashboard',
		index : 10 
	};

	$rootScope.$broadcast('AddItemHeader', msg);
});

dashboardModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    console.log('dashboardModule config');

    //
    // Now set up the states
    $stateProvider.state('dashboard', {
        url: "/dashboard",
        controller: 'dashboard.controller',
        templateUrl: "components/dashboard/dashboard.html"
    });
}]);


dashboardModule.controller('dashboard.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
	console.log('dashboardModule controller');
}]);
