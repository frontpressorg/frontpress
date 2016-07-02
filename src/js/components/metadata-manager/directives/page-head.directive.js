(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').directive('pageHead', pageHead);

	function pageHead(){
		var directive = {
			templateUrl: '/js/components/metadata-manager/templates/page-head.template.html',
			scope: {},
			controllerAs: 'vc',
			controller: 'HeadMetadataController',
			bindToController: true,
			restrict: 'AE',
			replace: false,					
			transclude: true,
		};
		return directive;
	}

})();