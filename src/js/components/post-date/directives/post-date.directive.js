angular.module("frontpress.components.post-date").directive("postDate", PostDateDirective);

function PostDateDirective($Frontpress){
	var directive = {
		restrict: "AE",
		scope: {
			post: '=post'
		},
		replace: true,
		templateUrl: $Frontpress.getTemplateUrl("components.postdate"),
		controller: "PostDateDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
