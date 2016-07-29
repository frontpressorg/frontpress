angular.module('frontpress.components.frontpress-provider').provider('$Frontpress', FrontpressProvider);

function FrontpressProvider(FrontpressConfigurationFile, $disqusProvider){
	var configure = {
		restApiUrl: null,
		setRestApiUrl: setRestApiUrl,
		pageSize: null,
		setPageSize: setPageSize,
		load: load,
		overrides: null,
		setOverrides: setOverrides
	};

	function setPageSize(pageSize){
		configure.pageSize = pageSize;
	}

	function setRestApiUrl(restApiUrl){
		configure.restApiUrl = restApiUrl;
	}

	function setOverrides(overrides){
		configure.overrides = overrides;
	}

	function load(){

		var configsToFunctions = {
			restApiUrl: configure.setRestApiUrl,
			pageSize: configure.setPageSize,
			disqusShortname: $disqusProvider.setShortname,
			overrides: configure.setOverrides
		};

		for(var config in configsToFunctions){
			configsToFunctions[config](FrontpressConfigurationFile[config]);
		}

        if (angular.isUndefined(FrontpressConfigurationFile.restApiUrl)) {
            throw '[frontpress missing variable]: restApiUrl is mandatory. You should provide this variable using frontpress.json file or $FrontpressProvider in you app config.';
        }

	}

	var provider = {
		$get: Frontpress,
		configure: configure
	};

	return provider;

	function Frontpress(){
		var model = {
			pageSize: configure.pageSize,
			restApiUrl: configure.restApiUrl,
			overrides: configure.overrides
		};

		return model;
	}
}
