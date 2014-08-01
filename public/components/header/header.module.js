// Create a new module
var headerModule = angular.module('header.module', []);

headerModule.run(function($rootScope, _) {	
	console.log('run');
	$rootScope.$on('AddItemHeader', function(a, item) {
	    
		console.log('AddItemHeader received');

        console.log(a);
        console.log(item);
        
        $rootScope.itemsHeader.push(item);
        
	});		


    $rootScope.itemsHeader = [];

});

headerModule.config(['$httpProvider', function($httpProvider) {
	console.log('config');
}]);
