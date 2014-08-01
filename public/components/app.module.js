// Create a new module
var appModule = angular.module('app.module', []);

appModule.run(function($rootScope) {	
	console.log('run');
	$rootScope.$on('DarvaException', function(darvaException, exception) {
		console.log('DarvaException received');
		
		$rootScope.errors.show = exception.show;
		$rootScope.errors.type = exception.type;
		$rootScope.errors.msg = exception.msg;
	//	$rootScope.errors.url = exception.url
		$rootScope.errors.date = exception.date;
	});		
});

appModule.config(['$httpProvider', function($httpProvider) {
	console.log('config');
}]);
