var module = angular.module("frontpress.components.page-head");

function pageHead($Frontpress){
	var directive = {
		templateUrl: $Frontpress.getTemplateUrl("components.page-head"),
		scope: {},
		controllerAs: "vc",
		controller: "PageHeadController",
		bindToController: true,
		restrict: "AE",
		replace: false,
		transclude: true,
	};

	return directive;
}

module.directive("pageHead", pageHead);
