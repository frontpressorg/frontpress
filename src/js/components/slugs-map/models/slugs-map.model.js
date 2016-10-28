angular.module("frontpress.components.slugs-map").factory("SlugsMapModel", SlugsMapModel);

SlugsMapModel.$inject = ["$cacheFactory", "PostsApi", "$Frontpress"];

function SlugsMapModel($cacheFactory, PostsApi, $Frontpress){
	var model = {
		load: load,
		updateFromPosts: updateFromPosts,
		getCachedSlugs: getCachedSlugs
	};

	var cache = $cacheFactory("slugsCache");
	var propertiesToCache;
	switch($Frontpress.apiVersion){
		case "v2":
			propertiesToCache = ["id", "slug"];
		break;
		case "v1":
			propertiesToCache = ["ID", "slug"];
		break;				
	}		

	function _addToCache(incrementalCache){
		var originalCache = cache.get("slugs");
		
		if(typeof originalCache === "undefined"){
			originalCache = [];
		}
		
		var concatenatedCache = originalCache.concat(incrementalCache);
		var idProperty;
		switch($Frontpress.apiVersion){
			case "v2":
				idProperty = "id";
			break;
			case "v1":
				idProperty = "ID";
			break;				
		}			
		concatenatedCache = concatenatedCache.removeDuplicatedObjectsByField(idProperty);
		cache.put("slugs", concatenatedCache);	
	}

	function getCachedSlugs(){
		var cachedSlugs = cache.get("slugs");
		return cachedSlugs;
	}

	function updateFromPosts(postsArray){	
		var filteredArray = postsArray.filterToProperties(propertiesToCache);
		_addToCache(filteredArray);		
	}

	function load(pageSize, pageNumber){
		var promiseParams = {"pageSize": pageSize, "pageNumber": pageNumber};
		var allPostsPromise = PostsApi.getAllPosts(promiseParams);

		allPostsPromise.success(function(result){
			var filteredArray = result.posts.filterToProperties(propertiesToCache);
			_addToCache(filteredArray);		
		});		
	}


	return model;
}