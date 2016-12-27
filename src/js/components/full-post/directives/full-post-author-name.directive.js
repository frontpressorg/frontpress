var module = angular.module("frontpress.components.full-post");

function FullPostAuthorNameDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.authorname"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

module.directive("fullPostAuthorName", FullPostAuthorNameDirective);
FullPostAuthorNameDirective.$inject = ["$FrontPress"];
