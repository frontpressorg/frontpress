(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').factory('MetadataManagerModel', MetadataManagerModel);

	function MetadataManagerModel(){
		var model = {
			pageTitle: null,
			pageDescription: null,
			setPageTitle: setPageTitle,
			setPageDescription: setPageDescription,
			isIndex: true,
			isFollow: true,
			setIsIndex: setIsIndex,
			setIsFollow: setIsFollow,
			pageRobots: null,		
			init: init	
		};

		function setPageTitle(pageTitle){
			model.pageTitle = pageTitle;
		}

		function setPageDescription(pageDescription){
			model.pageDescription = pageDescription;
		}

		function setIsIndex(isIndex){
			model.isIndex = isIndex;
			_setPageRobots();
		}

		function setIsFollow(isFollow){
			model.isFollow = isFollow;
			_setPageRobots();
		}

		function _setPageRobots(){
        	var isIndexString = model.isIndex ? 'index' : 'noindex';
        	var isFollowString = model.isFollow ? 'follow' : 'nofollow';
        	model.pageRobots = '{0}, {1}'.format(isIndexString, isFollowString);					
		}

		function init(){
			_setPageRobots();
		}


		return model;
	}

})();