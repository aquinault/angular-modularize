// Create a new module
var coverModule = angular.module('cover.module', []);

coverModule.run(function($rootScope, _) {
    console.log('coverModule run');
    
	var msg = {
		name : 'Home',
		url : 'cover',
		index : 1 
	};

	$rootScope.$broadcast('AddItemHeader', msg);

});

coverModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    console.log('coverModule config');

    //
    // Now set up the states
    $stateProvider.state('cover', {
        url: "/cover",
        controller: 'cover.controller',
        templateUrl: "components/cover/cover.html"
    });
}]);


coverModule.controller('cover.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
    console.log('coverModule controller');

}]);
