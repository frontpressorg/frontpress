angular.module("frontpress.components.list-posts").directive("listPostsTitle", ListPostsTitleDirective);

function ListPostsTitleDirective($FrontPress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "AE",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		replace: true,
		bindToController: true,
		templateUrl: $FrontPress.getTemplateUrl("components.listposts.title")
	};

	return directive;
}
