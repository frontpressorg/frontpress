(function(){
	"use strict";
	angular.module('frontpress.components.frontpress-provider').provider('$Frontpress', FrontpressProvider);
	
	function FrontpressProvider(){
		var configure = {
			restApiUrl: null,
			setRestApiUrl: setRestApiUrl,
			pageSize: null,
			setPageSize: setPageSize
		};

		function setPageSize(pageSize){
			configure.pageSize = pageSize;
		}

		function setRestApiUrl(restApiUrl){
			configure.restApiUrl = restApiUrl;
		}

		var provider = {
			$get: Frontpress,
			configure: configure
		};

		return provider;

		function Frontpress(){
			var model = {
				pageSize: configure.pageSize,
				restApiUrl: configure.restApiUrl
			};

			return model;
		}
	}	

})();

