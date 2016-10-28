angular.module("frontpress.views.post").directive("postView", PostViewDirective);

function PostViewDirective($Frontpress){
	var directive = {
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("views.post"),
		restrict: "E",
		controllerAs: "vc",
		bindToController: true,
		controller: "PostDirectiveController"
	};
	return directive;
}
