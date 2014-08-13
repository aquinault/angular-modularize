(function () {

    // Create a new module
    angular.module('cover.module', []);
    
    angular.module('cover.module').run(function($rootScope, _) {
        console.log('coverModule run');
        
    	var msg = {
    		name : 'Home',
    		url : 'cover',
    		index : 1 
    	};
    
    	$rootScope.$broadcast('AddItemHeader', msg);
    
    });
    
    angular.module('cover.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('coverModule config');
    
        //
        // Now set up the states
        $stateProvider.state('cover', {
            url: "/cover",
            controller: 'cover.controller',
            templateUrl: "components/cover/cover.html"
        });
    }]);
    
    angular.module('cover.module').controller('cover.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
        console.log('coverModule controller');
    
    }]);

})();