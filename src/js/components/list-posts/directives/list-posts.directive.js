angular.module("frontpress.components.list-posts").directive("listPosts", ListPostsDirective);

function ListPostsDirective($Frontpress){
	var directive = {
		scope: {},
		restrict: "AE",
		controller: "ListPostsDirectiveController",
		controllerAs: "vc",
		replace: true,
		bindToController: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts")
	};

	return directive;
}
