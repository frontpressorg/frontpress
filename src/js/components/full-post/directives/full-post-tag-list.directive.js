angular.module('frontpress.components.full-post').directive('fullPostTagList', FullPostTagListDirective);

function FullPostTagListDirective(){
	var directive = {
		restrict: 'E',
		scope: {},
		templateUrl: '/js/components/full-post/templates/full-post-tag-list.template.html',
		controller: 'FullPostTagListDirectiveController',
		controllerAs: 'vc',
		bindToController: true
	};

	return directive;
}
