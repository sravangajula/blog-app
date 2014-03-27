var sampleApp = angular.module("Sampleblog", ['ngRoute','postController','postServices'])

sampleApp.config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        var interceptor = ['$location', '$rootScope', '$q', function($location, $rootScope, $q) {
            function success(response) {
                return response
            };

            function error(response) {
                if (response.status == 401) {
                    $rootScope.$broadcast('event:unauthorized');
                    $location.path('/users/sign_in');
                    return response;
                };
                return $q.reject(response);
            };

            return function(promise) {
                return promise.then(success, error);
            };
        }];
        $httpProvider.responseInterceptors.push(interceptor);
  }])


sampleApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/posts', {
		templateUrl:  '../assets/posts/index.html', 
		controller: 'PostIndexCtrl'
	})
	.when('/posts/:post_id',{
		templateUrl: '../assets/posts/show.html' ,
		controller: 'PostShowCtrl'
	})
	.when('/posts/:post_id/edit',{
		templateUrl: '../assets/posts/edit.html',
		controller: 'EditPostCtrl'
	})
	.otherwise({
		templateUrl: '../assets/posts/index.html', 
		controller: 'PostIndexCtrl'
	}) 
}]);


