(function(){	

	"use strict";

	angular.module('frontpress.components.pagination').directive('pagination', pagination);

	function pagination(){
		var directive = {
			restrict: 'AE',
			replace: true,
			scope: {},
			templateUrl: '/js/components/pagination/templates/pagination.template.html',
			controllerAs: 'vc',
			controller: 'PaginationController',
			bindToController: true,
		};
		return directive;
	}

})();