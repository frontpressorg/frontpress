"use strict";

function PageHead($FrontPress){
	var directive = {
		templateUrl: $FrontPress.getTemplateUrl("components.pagehead"),
		scope: {},
		controllerAs: "vc",
		controller: "PageHeadController",
		bindToController: true,
		restrict: "A",
		replace: false,
		transclude: true,
	};

	return directive;
}

angular.module("frontpress.components.page-head").directive("pageHead", PageHead);
PageHead.$inject = ["$FrontPress"];
