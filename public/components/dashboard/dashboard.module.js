(function () {

    // Create a new module
    angular.module('dashboard.module', []);
    
    angular.module('dashboard.module').run(function($rootScope, _) {	
    	console.log('dashboardModule run');
    
    	var msg = {
    		name : 'Dashboard',
    		url : 'dashboard',
    		index : 10 
    	};
    
    	$rootScope.$broadcast('AddItemHeader', msg);
    });
    
    angular.module('dashboard.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('dashboardModule config');
    
        //
        // Now set up the states
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            controller: 'dashboard.controller',
            templateUrl: "components/dashboard/dashboard.html"
        });
    }]);
    
    
    angular.module('dashboard.module').controller('dashboard.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
    	console.log('dashboardModule controller');
    }]);

})();