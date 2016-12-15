angular.module("frontpress.components.full-post").directive("fullPost", FullPostDirective);

function FullPostDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost"),
		controller: "FullPostDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}
FullPostDirective.$inject = ["$FrontPress"];
