angular.module("frontpress.components.list-posts").directive("listPostsTitle", ListPostsTitleDirective);

function ListPostsTitleDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "E",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts.title")
	};

	return directive;
}
