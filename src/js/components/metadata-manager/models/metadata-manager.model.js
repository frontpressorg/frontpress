(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').factory('MetadataManagerModel', MetadataManagerModel);

	function MetadataManagerModel(){
		var model = {
			pageTitle: null,
			setPageTitle: setPageTitle
		};

		function setPageTitle(pageTitle){
			model.pageTitle = pageTitle;
		}

		return model;
	}

})();