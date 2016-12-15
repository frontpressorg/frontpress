angular.module("frontpress.views.post").directive("postView", PostViewDirective);

function PostViewDirective($FrontPress){
	var directive = {
		scope: {},
		templateUrl: $FrontPress.getTemplateUrl("views.post"),
		restrict: "AE",
		controllerAs: "vc",
		bindToController: true,
		controller: "PostDirectiveController",
		replace: true
	};
	return directive;
}
PostViewDirective.$inject = ["$FrontPress"];
