(function(){

	"use strict";

	angular.module('frontpress.components.blog-information').factory('BlogInformationModel', BlogInformationModel);

	function BlogInformationModel(BlogApi){
		var model = {
			description: null,
			isLoadingBlogInformation: false,
			loadBlogInformation: loadBlogInformation,
			name: null,
			setDescription: setDescription,
			setName: setName,
		};


		function setDescription(description){
			model.description = description;
		}

		function setName(name){
			model.name = name;
		}

		function loadBlogInformation(){
			model.isLoadingBlogInformation = true;
			var postPromise = BlogApi.getBlogInformation();

			postPromise.success(function(result){
				model.setName(result.name);
				model.setDescription(result.description);
				model.isLoadingBlogInformation = false;
			});
		}

		return model;
	}

})();