var postCtrl = angular.module("postController", [])

postCtrl.controller('PostIndexCtrl', ['$scope','$location', '$http','Post', function($scope,$location,$http,Post){
	 $scope.posts = [{"title":"Loading Posts......", "body":""}];
//	 	 static_posts = [{"name":"pasilla", "id":"1"},
//                       {"name":"jalapeno", "id":"2"},
//                       {"name":"habanero", "id":"3"}];
        
//     $http.get('/posts.json').success(function(data) { $scope.posts = data})
//	 .error(function(data) {$scopt.posts =static_posts})
	
	 $scope.posts = Post.index();
	 
   	 $scope.showPost = function(post_id){
		$location.path('/posts/'+post_id);
	 }
	 
	 $scope.editPost = function(post_id){
	 	$location.path('/posts/'+post_id+'/edit');
	 }
	 
}]);

postCtrl.controller('PostShowCtrl', ['$scope', '$routeParams','$http','$location','Post', function($scope, $routeParams, $http,$location, Post){
	//$http.get('/posts/'+$routeParams.post_id+'.json').success(function(data) { $scope.show_post = data })
	
	console.log ('getting data from post table');
	
	$scope.show_post =Post.show({id: $routeParams.post_id});	
	$scope.editPost = function(post_id){
	 	$location.path('/posts/'+post_id+'/edit');
	}
}]);

postCtrl.controller('EditPostCtrl',['$scope','$rootScope', '$routeParams','$location','Post', function($scope, $rootScope,$routeParams,$location,Post){
	$scope.post = Post.get({ id: $routeParams.post_id });
	
	$scope.updatePost = function(){
		update_post = this.post;
		post_updated = Post.update({id: update_post.id }, update_post);
		
		$location.path('/posts/'+$routeParams.post_id);
		
//		console.log(post_updated);
	}
			
}]);
