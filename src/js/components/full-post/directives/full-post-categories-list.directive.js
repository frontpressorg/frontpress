var module = angular.module("frontpress.components.full-post");

function FullPostCategoriesListDirective($Frontpress){
	return {
		restrict: "E",
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.categories"),
		controller: "FullPostCategoriesListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};
}

module.directive("fullPostCategoriesList", FullPostCategoriesListDirective);
