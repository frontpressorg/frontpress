(function(){

	"use strict";

	angular.module('frontpress.components.full-post').factory('FullPostModel', FullPostModel);

	function FullPostModel(PostsApi, $q){
		var model = {
			title: null,
			content: null,
			featuredImage: null,
			setTitle: setTitle,
			setContent: setContent,
			setFeaturedImage: setFeaturedImage,
			loadFullPostBySlug: loadFullPostBySlug,
			isLoadingFullPost: false,
		};

		function setTitle(title){
			model.title = title;
		}

		function setContent(content){
			model.content = content;
		}

		function setFeaturedImage(featuredImage){
			model.featuredImage = featuredImage;
		}

		function loadFullPostBySlug(slug){
			var defer = $q.defer();

			model.isLoadingFullPost = true;
			var postPromise = PostsApi.getPostBySlug(slug);
			postPromise.success(function(result){
				model.setTitle(result.title);
				model.setContent(result.content);
				model.setFeaturedImage(result.featured_image);
				model.isLoadingFullPost = false;
				defer.resolve();
			});
			return defer.promise;
		}

		return model;
	}

})();