var module = angular.module("frontpress.components.pagination");

function pagination(){
	var directive = {
		restrict: "AE",
		replace: true,
		scope: {},
		templateUrl: "/js/components/pagination/templates/pagination.template.html",
		controllerAs: "vc",
		controller: "PaginationController",
		bindToController: true,
	};

	return directive;
}

module.directive("pagination", pagination);
