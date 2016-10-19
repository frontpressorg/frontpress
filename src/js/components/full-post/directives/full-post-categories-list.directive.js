angular.module('frontpress.components.full-post').directive('fullPostCategoriesList', FullPostCategoriesListDirective);

function FullPostCategoriesListDirective(){
	var directive = {
		restrict: 'E',
		scope: {},
		templateUrl: '/js/components/full-post/templates/full-post-categories-list.template.html',
		controller: 'FullPostCategoriesListDirectiveController',
		controllerAs: 'vc',
		bindToController: true,
		replace: true
	};

	return directive;
}
