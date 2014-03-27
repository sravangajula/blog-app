//angular.module('yourApp').factory('UserService', function () {
//
//  var currentUser = null;
//
//  var adminRoles = ['admin', 'editor'];
//  var otherRoles = ['user'];
//
//  return {
//    // some code that gets and sets the user to the singleton variable...
//
//    validateRoleAdmin: function () {
//      return _.contains(adminRoles, currentUser.role);
//    },
//
//    validateRoleOther: function () {
//      return _.contains(otherRoles, currentUser.role);
//    }
//  };
//});


var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('User',['$resource', function($resource){
	return $resource('/users/:id.json',{},{
		index: {method: 'GET', isArray: true},
		show: {method: 'GET'},
		save: {method: 'POST'},
		update: {method: 'PUT'},
		destroy: {method: 'DELETE'}
	});	
}]);

userServices.authorize_user = function(){
  var currentUser = null;
  var roles = ['admin', 'moderator','user'];
  
  validateUserRole: function(role){
  	return _.contains(adminRoles, currentUser.role);
  }
  
}

