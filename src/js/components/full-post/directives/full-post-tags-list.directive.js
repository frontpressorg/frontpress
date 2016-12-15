var module = angular.module("frontpress.components.full-post");

function FullPostTagListDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.tags"),
		controller: "FullPostTagsListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

module.directive("fullPostTagsList", FullPostTagListDirective);
FullPostTagListDirective.$inject = ["$FrontPress"];
