(function(){

	"use strict";

	angular.module('frontpress.components.full-post').factory('FullPostModel', FullPostModel);

	function FullPostModel(PostsApi, $q){
		var model = {
			categoryNames: null,
			content: null,
			date: null,
			featuredImage: null,
			isLoadingFullPost: false,
			loadFullPostBySlug: loadFullPostBySlug,
			setCategoryNames: setCategoryNames,
			setContent: setContent,
			setDate: setDate,
			setFeaturedImage: setFeaturedImage,
			setTagNames: setTagNames,
			setTitle: setTitle,
			tagNames: null,
			title: null,	
		};

		function setTitle(title){
			model.title = title;
		}

		function setContent(content){
			model.content = content;
		}

		function setDate(date){
			model.date = date;
		}

		function setFeaturedImage(featuredImage){
			model.featuredImage = featuredImage;
		}

		function setCategoryNames(categoryNames){
			model.categoryNames = categoryNames;
		}

		function setTagNames(tagNames){
			model.tagNames = tagNames;
		}

		function loadFullPostBySlug(slug){
			var defer = $q.defer();

			model.isLoadingFullPost = true;
			var postPromise = PostsApi.getPostBySlug(slug);
			postPromise.success(function(result){
				var categoryNames = JSON.search(result.categories, '//name');
				var tagNames = JSON.search(result.tags,'//name');
				model.setTitle(result.title);
				model.setContent(result.content);
				model.setFeaturedImage(result.featured_image);
				model.setDate(result.date);				
				model.setCategoryNames(categoryNames);
				model.setTagNames(tagNames);
				model.isLoadingFullPost = false;
				defer.resolve();
			});
			return defer.promise;
		}

		return model;
	}

})();