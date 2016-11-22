angular.module("frontpress.components.list-posts").directive("listPosts", ListPostsDirective);

function ListPostsDirective($FrontPress){
	var directive = {
		scope: {},
		restrict: "AE",
		controller: "ListPostsDirectiveController",
		controllerAs: "vc",
		replace: true,
		bindToController: true,
		templateUrl: $FrontPress.getTemplateUrl("components.listposts")
	};

	return directive;
}
