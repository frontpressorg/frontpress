angular.module("frontpress.components.list-posts").directive("listPosts", ListPostsDirective);

function ListPostsDirective(){
	var directive = {
		scope: {},
		restrict: "E",
		controller: "ListPostsDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		templateUrl: "/js/components/list-posts/templates/list-posts.template.html"
	};

	return directive;
}
