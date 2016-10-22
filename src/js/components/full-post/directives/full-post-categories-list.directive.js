var module = angular.module('frontpress.components.full-post');

function FullPostCategoriesListDirective(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: '/js/components/full-post/templates/full-post-categories-list.template.html',
		controller: 'FullPostCategoriesListDirectiveController',
		controllerAs: 'vc',
		bindToController: true,
		replace: true
	};
}

module.directive('fullPostCategoriesList', FullPostCategoriesListDirective);
