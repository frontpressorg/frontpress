var module = angular.module("frontpress.components.full-post");

function FullPostTagListDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.tags"),
		controller: "FullPostTagsListDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

module.directive("fullPostTagsList", FullPostTagListDirective);
