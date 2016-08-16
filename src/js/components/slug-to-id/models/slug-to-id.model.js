angular.module('frontpress.components.slug-to-id').factory('SlugToIdModel', SlugToIdModel);

SlugToIdModel.$inject = ["$cacheFactory", "PostsApi"];

function SlugToIdModel($cacheFactory, PostsApi){
	var model = {
		// teste: teste
	};

	// function teste(){
	// 	var allPostsPromise = PostsApi.getAllPosts({'pageSize': 20});

	// 	allPostsPromise.success(function(result){
	// 		var filteredArray = result.posts.filterToProperties("ID", "slug");
	// 	});		
	// }


	return model;
}