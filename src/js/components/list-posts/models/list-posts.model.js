(function(){

	"use strict";

	angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

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

			var allPostsPromise = PostsApi.getAllPosts();

			allPostsPromise.success(function(result){
				model.postsList = result.posts;
				model.isLoadingPosts = false;
			});
		}
	}

})();