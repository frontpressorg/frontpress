angular.module("frontpress.components.list-posts").directive("listPostsTitle", ListPostsTitleDirective);

function ListPostsTitleDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "AE",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		replace: true,
		bindToController: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts.title")
	};

	return directive;
}
