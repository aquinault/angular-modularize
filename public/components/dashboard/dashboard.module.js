// Create a new module
var dashboardModule = angular.module('dashboard.module', []);

dashboardModule.run(function($rootScope, _) {	
	console.log('run');

	var msg = {
		name : 'Dashboard',
		url : '/dashboard',
		index : 10 
	};

	$rootScope.$broadcast('AddItemHeader', msg);


});

headerModule.config(['$httpProvider', function($httpProvider) {
	console.log('config');
}]);
