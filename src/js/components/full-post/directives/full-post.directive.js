angular.module("frontpress.components.full-post").directive("fullPost", FullPostDirective);

function FullPostDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost"),
		controller: "FullPostDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
