var module = angular.module("frontpress.components.full-post");

function FullPostTagListDirective($Frontpress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.tags"),
		controller: "FullPostTagsListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

module.directive("fullPostTagsList", FullPostTagListDirective);
