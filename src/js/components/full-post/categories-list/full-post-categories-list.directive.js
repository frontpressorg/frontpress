"use strict";

function FullPostCategoriesListDirective($FrontPress){
	return {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.categories"),
		controller: "FullPostCategoriesListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};
}

angular.module("frontpress.components.full-post").directive("fullPostCategoriesList", FullPostCategoriesListDirective);
FullPostCategoriesListDirective.$inject = ["$FrontPress"];
