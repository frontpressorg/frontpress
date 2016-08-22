angular.module('frontpress.components.slugs-map').factory('SlugsMapModel', SlugsMapModel);

SlugsMapModel.$inject = ["$cacheFactory", "PostsApi"];

function SlugsMapModel($cacheFactory, PostsApi){
	var model = {
		load: load,
		updateFromPosts: updateFromPosts,
		getCachedSlugs: getCachedSlugs
	};

	var cache = $cacheFactory("slugsCache");

	function _addToCache(incrementalCache){
		var originalCache = cache.get("slugs");
		
		if(typeof originalCache === "undefined"){
			originalCache = [];
		}
		
		var concatenatedCache = originalCache.concat(incrementalCache);
		cache.put("slugs", concatenatedCache);	
	}

	function getCachedSlugs(){
		var cachedSlugs = cache.get("slugs");
		return cachedSlugs;
	}

	function updateFromPosts(postsArray){
		var filteredArray = postsArray.filterToProperties("ID", "slug");
		_addToCache(filteredArray);		
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