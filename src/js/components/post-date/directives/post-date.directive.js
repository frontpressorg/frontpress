angular.module("frontpress.components.post-date").directive("postDate", PostDateDirective);

function PostDateDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: '=post'
		},
		replace: true,
		templateUrl: $FrontPress.getTemplateUrl("components.postdate"),
		controller: "PostDateDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
