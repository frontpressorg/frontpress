angular.module("frontpress.components.list-posts").directive("listPostsExcerpt", ListPostsExcerptDirective);

function ListPostsExcerptDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "E",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts.excerpt")

	};

	return directive;
}
