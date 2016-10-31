angular.module("frontpress.components.list-posts").directive("listPosts", ListPostsDirective);

function ListPostsDirective($Frontpress){
	var directive = {
		scope: {},
		restrict: "E",
		controller: "ListPostsDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		templateUrl: $Frontpress.getTemplateUrl("components.listposts")
	};

	return directive;
}
