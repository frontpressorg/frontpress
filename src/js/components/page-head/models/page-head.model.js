var module = angular.module("frontpress.components.page-head");

function PageHeadModel($location){
	var model = {
		init: init,
		isFollow: true,
		isIndex: true,
		pageCanonical: null,
		pageDescription: null,
		pageRobots: null,
		pageTitle: null,
		setIsFollow: setIsFollow,
		setIsIndex: setIsIndex,
		setPageCanonical: setPageCanonical,
		setPageDescription: setPageDescription,
		setPageTitle: setPageTitle,
		setRelPrevNumber: setRelPrevNumber,
		setRelNextNumber: setRelNextNumber,
		relNextNumber: null,
		relPrevNumber: null
	};

	function setPageTitle(pageTitle){
		model.pageTitle = pageTitle;
	}

	function setPageDescription(pageDescription){
		model.pageDescription = pageDescription;
	}

	function setRelNextNumber(relNextNumber){
		model.relNextNumber = relNextNumber;
	}

	function setRelPrevNumber(relPrevNumber){
		model.relPrevNumber = relPrevNumber;
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
    	var isIndexString = model.isIndex ? "index" : "noindex";
    	var isFollowString = model.isFollow ? "follow" : "nofollow";
    	model.pageRobots = "{0}, {1}".format(isIndexString, isFollowString);
	}

	function setPageCanonical(pageCanonical){
		model.pageCanonical = pageCanonical;
	}

	function init(){
		model.setPageCanonical($location.absUrl());
		_setPageRobots();
	}

	return model;
}

module.factory("PageHeadModel", PageHeadModel);
