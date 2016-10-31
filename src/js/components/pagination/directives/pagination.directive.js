var module = angular.module("frontpress.components.pagination");

function pagination($Frontpress){
	var directive = {
		restrict: "AE",
		replace: true,
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("components.pagination"),
		controllerAs: "vc",
		controller: "PaginationController",
		bindToController: true,
	};

	return directive;
}

module.directive("pagination", pagination);
