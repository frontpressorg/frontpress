angular.module("frontpress.components.featured-image").directive("featuredImage", FeaturedImageDirective);

function FeaturedImageDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {
			post: '=post'
		},
		replace: true,
		templateUrl: $Frontpress.getTemplateUrl("components.featuredimage"),
		controller: "FeaturedImageDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
