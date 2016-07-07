(function(){
	"use strict";
	angular.module('frontpress.components.frontpress-provider').provider('$Frontpress', FrontpressProvider);
	
	function FrontpressProvider(FrontpressConfigurationFile, $disqusProvider){
		var configure = {
			restApiUrl: null,
			setRestApiUrl: setRestApiUrl,
			pageSize: null,
			setPageSize: setPageSize,
			load: load
		};

		function setPageSize(pageSize){
			configure.pageSize = pageSize;
		}

		function setRestApiUrl(restApiUrl){
			configure.restApiUrl = restApiUrl;
		}

		function load(){
			// falta uma sanidadezinha aqui 
			configure.setRestApiUrl(FrontpressConfigurationFile.restApiUrl);
			configure.setPageSize(FrontpressConfigurationFile.pageSize);
			$disqusProvider.setShortname(FrontpressConfigurationFile.disqusShortname);
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

