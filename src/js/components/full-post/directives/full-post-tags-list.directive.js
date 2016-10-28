var module = angular.module("frontpress.components.full-post");

function FullPostTagListDirective(){
	var directive = {
		restrict: "E",
		scope: {},
		templateUrl: "/js/components/full-post/templates/full-post-tags-list.template.html",
		controller: "FullPostTagsListDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

module.directive("fullPostTagsList", FullPostTagListDirective);
