angular.module("frontpress.components.list-posts").directive("listPostsExcerpt", ListPostsExcerptDirective);

function ListPostsExcerptDirective($FrontPress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "AE",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true,
		templateUrl: $FrontPress.getTemplateUrl("components.listposts.excerpt")

	};

	return directive;
}
ListPostsExcerptDirective.$inject = ["$FrontPress"];
