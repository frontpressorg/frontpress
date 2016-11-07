var module = angular.module("frontpress.components.full-post");

function FullPostCategoriesListDirective($Frontpress){
	return {
		restrict: "E",
		scope: {
			post: "=post"
		},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.categories"),
		controller: "FullPostCategoriesListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};
}

module.directive("fullPostCategoriesList", FullPostCategoriesListDirective);
