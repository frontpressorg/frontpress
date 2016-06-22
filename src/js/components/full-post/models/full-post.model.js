(function(){
	
	"use strict";

	angular.module('ngpress.components.full-post').factory('FullPostModel', FullPostModel);

	function FullPostModel(PostsApi){
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
			model.isLoadingFullPost = true;
			var postPromise = PostsApi.getPostBySlug(slug);
			postPromise.success(function(result){
				model.setTitle(result.title);
				console.log(model);
			});
		}

		return model;
	}

})();