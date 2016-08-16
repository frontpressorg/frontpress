angular.module('frontpress.components.slugs-map').factory('SlugsMapModel', SlugsMapModel);

SlugsMapModel.$inject = ["$cacheFactory", "PostsApi"];

function SlugsMapModel($cacheFactory, PostsApi){
	var model = {
		load: load,
	};

	var cache = $cacheFactory("slugsCache");

	function _addToCache(arrayToAdd){
		cache.put("slugs", arrayToAdd);
	}

	function load(pageSize, pageNumber){
		var promiseParams = {'pageSize': pageSize, 'pageNumber': pageNumber};
		var allPostsPromise = PostsApi.getAllPosts(promiseParams);

		allPostsPromise.success(function(result){
			var filteredArray = result.posts.filterToProperties("ID", "slug");
			_addToCache(filteredArray);			
		});		
	}


	return model;
}