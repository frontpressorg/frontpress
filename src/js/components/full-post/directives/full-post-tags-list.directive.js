angular.module("frontpress.components.full-post").directive("fullPostTagsList", FullPostTagListDirective);

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
