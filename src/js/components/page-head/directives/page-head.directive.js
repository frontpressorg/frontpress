var module = angular.module("frontpress.components.page-head");

function pageHead($FrontPress){
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

module.directive("pageHead", pageHead);
pageHead.$inject = ["$FrontPress"];
