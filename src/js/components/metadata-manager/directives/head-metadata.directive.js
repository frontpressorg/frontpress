(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').directive('headMetadata', headMetadata);

	function headMetadata(){
		var directive = {
			templateUrl: '/js/components/metadata-manager/templates/head-metadata.template.html',
			scope: {},
			controllerAs: 'vc',
			controller: 'HeadMetadataController',
			bindToController: true,
			restrict: 'E',
			replace: true,					
		};
		return directive;
	}

})();