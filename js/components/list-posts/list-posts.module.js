(function(){
	
	"use strict";

	angular.module('ngpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

	function ListPostsModel(){
		var model = {
			postsList: null,
			loadPosts: loadPosts,
			pageSize: 10,
			pageNumber: 1,
			isLoadingPosts: null,
		}

		function loadPosts(){
			model.isLoadingPosts = true;
		}
	}

})();