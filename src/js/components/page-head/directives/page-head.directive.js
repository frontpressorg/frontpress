var module = angular.module("frontpress.components.page-head");

function pageHead(){
	var directive = {
		templateUrl: "/js/components/page-head/templates/page-head.template.html",
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
