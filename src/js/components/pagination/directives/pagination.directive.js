var module = angular.module("frontpress.components.pagination");

function pagination($FrontPress){
	var directive = {
		restrict: "AE",
		replace: true,
		scope: {},
		templateUrl: $FrontPress.getTemplateUrl("components.pagination"),
		controllerAs: "vc",
		controller: "PaginationController",
		bindToController: true,
	};

	return directive;
}

module.directive("pagination", pagination);
