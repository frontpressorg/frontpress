var module = angular.module("frontpress.components.full-post");

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

module.directive("fullPostCategoriesList", FullPostCategoriesListDirective);
FullPostCategoriesListDirective.$inject = ["$FrontPress"];
