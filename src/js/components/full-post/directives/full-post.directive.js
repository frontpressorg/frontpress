angular.module("frontpress.components.full-post").directive("fullPost", FullPostDirective);

function FullPostDirective(){
	var directive = {
		restrict: "E",
		scope: {},
		templateUrl: "/js/components/full-post/templates/full-post.template.html",
		controller: "FullPostDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
