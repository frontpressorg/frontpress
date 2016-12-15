angular.module("frontpress.components.featured-image").directive("featuredImage", FeaturedImageDirective);

function FeaturedImageDirective($FrontPress){
	var directive = {
		restrict: "E",
		scope: {
			post: '=post'
		},
		replace: true,
		templateUrl: $FrontPress.getTemplateUrl("components.featuredimage"),
		controller: "FeaturedImageDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

FeaturedImageDirective.$inject = ["$FrontPress"];
