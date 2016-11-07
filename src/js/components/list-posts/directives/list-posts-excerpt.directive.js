angular.module("frontpress.components.list-posts").directive("listPostsExcerpt", ListPostsExcerptDirective);

function ListPostsExcerptDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "AE",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts.excerpt")

	};

	return directive;
}
