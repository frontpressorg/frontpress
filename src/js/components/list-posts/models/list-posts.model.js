(function(){
	
	"use strict";

	angular.module('ngpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

	function ListPostsModel(PostsApi){
		var model = {
			postsList: null,
			loadPosts: loadPosts,
			pageSize: 10,
			pageNumber: 1,
			isLoadingPosts: null,
		}

		return model;

		function loadPosts(){
			model.isLoadingPosts = true;
			
			var allPostsPromise = PostsApi.getAllPosts().promise;
			console.log(allPostsPromise);
		}
	}

})();