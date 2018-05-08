"use strict";

function Pagination($FrontPress){
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

angular.module("frontpress.components.pagination").directive("pagination", Pagination);
Pagination.$inject = ["$FrontPress"];
