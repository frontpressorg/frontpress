angular.module("frontpress.components.slugs-map").factory("SlugsMapModel", SlugsMapModel);

SlugsMapModel.$inject = ["$cacheFactory", "PostsApi", "ApiManagerMap"];

function SlugsMapModel($cacheFactory, PostsApi, ApiManagerMap){
	var model = {
        addToCache: addToCache,
		load: load,
		updateFromPosts: updateFromPosts,
		getCachedSlugs: getCachedSlugs
	};

	var cache = $cacheFactory("slugsCache");
	var propertiesToCache = ["slug"];
    propertiesToCache.push(ApiManagerMap.postId);

	function addToCache(incrementalCache){
		var originalCache = cache.get("slugs");

		if(typeof originalCache === "undefined"){
			originalCache = [];
		}

		var concatenatedCache = originalCache.concat(incrementalCache);
		var idProperty = ApiManagerMap.postId;
		concatenatedCache = concatenatedCache.removeDuplicatedObjectsByField(idProperty);
		cache.put("slugs", concatenatedCache);
	}

	function getCachedSlugs(){
		var cachedSlugs = cache.get("slugs");
		return cachedSlugs;
	}

	function updateFromPosts(postsArray){
		var filteredArray = postsArray.filterToProperties(propertiesToCache);
		model.addToCache(filteredArray);
	}

	function load(pageSize, pageNumber){
		var promiseParams = {"pageSize": pageSize, "pageNumber": pageNumber};
		var allPostsPromise = PostsApi.getAllPosts(promiseParams);

		allPostsPromise.then(function(result){
			var filteredArray = result.posts.filterToProperties(propertiesToCache);
			model.addToCache(filteredArray);
		});

		allPostsPromise.catch(function(error){
			console.log(error);
		})
	}


	return model;
}
