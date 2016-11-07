angular.module("frontpress.views.post").directive("postView", PostViewDirective);

function PostViewDirective($Frontpress){
	var directive = {
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("views.post"),
		restrict: "AE",
		controllerAs: "vc",
		bindToController: true,
		controller: "PostDirectiveController",
		replace: true
	};
	return directive;
}
