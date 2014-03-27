var postServices = angular.module('postServices', ['ngResource']);

postServices.factory('Post',['$resource', function($resource){
	return $resource('/posts/:id.json',{},{
		index: {method: 'GET', isArray: true},
		show: {method: 'GET'},
		save: {method: 'POST'},
		update: {method: 'PUT'},
		destroy: {method: 'DELETE'}
	});	
}]);
