(function(){
	'use strict';

	angular.module('ngpress.filters').filter('trustAsHtml', TrustAsHtml);

	TrustAsHtml.$inject = ['$sce'];

	function TrustAsHtml($sce){

		function filter(text){
			return $sce.trustAsHtml(text);
		}

		return filter;
	}

})();