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
		setIsIndex: setIsIndex,
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

    model.setIsFollow = setIsFollow;
    model.setPageCanonical = setPageCanonical;
    model.setPageDescription = setPageDescription;
    model.setPageTitle = setPageTitle;
    model.setRelPrevNumber = setRelPrevNumber;
    model.setRelNextNumber = setRelNextNumber;

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
