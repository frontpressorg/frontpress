var module = angular.module("frontpress.components.frontpress-provider");

function FrontpressProvider(FrontpressConfigurationFile, $disqusProvider){
	var configure = {
		load: load,
		overrides: null,
		pageSize: null,
		restApiUrl: null,
		setApiVersion: setApiVersion,
		setOverrides: setOverrides,
		setPageSize: setPageSize,
		setRestApiUrl: setRestApiUrl,
		setTemplateUrl: setTemplateUrl,
		templateUrl: null,
	};

	function setPageSize(pageSize){
		configure.pageSize = pageSize;
	}

	function setApiVersion(apiVersion){
		configure.apiVersion = apiVersion;
	}

	function setRestApiUrl(restApiUrl){
		configure.restApiUrl = restApiUrl;
	}

	function setOverrides(overrides){
		configure.overrides = overrides;
	}

	function setTemplateUrl(templateUrl){
		configure.templateUrl = templateUrl;
	}

	function load(){

		var configsToFunctions = {
			restApiUrl: configure.setRestApiUrl,
			pageSize: configure.setPageSize,
			disqusShortname: $disqusProvider.setShortname,
			overrides: configure.setOverrides,
			apiVersion: configure.setApiVersion,

		};

		for(var config in configsToFunctions){
			configsToFunctions[config](FrontpressConfigurationFile[config]);
		}

        if (angular.isUndefined(FrontpressConfigurationFile.restApiUrl)) {
            throw "[frontpress missing variable]: restApiUrl is mandatory. You should provide this variable using frontpress.json file or $FrontpressProvider in you app config.";
        }

        if (angular.isUndefined(FrontpressConfigurationFile.apiVersion)) {
            throw "[frontpress missing variable]: apiVersion is mandatory. You should provide this variable using frontpress.json file or $FrontpressProvider in you app config.";
        }

	}

	function Frontpress(){
		var model = {
			pageSize: configure.pageSize,
			restApiUrl: configure.restApiUrl,
			overrides: configure.overrides,
			apiVersion: configure.apiVersion,
			templateUrl: configure.templateUrl,
			getTemplateUrl: getTemplateUrl
		};

		function getTemplateUrl(templateName){
			return model.templateUrl[templateName];
		}		

		return model;
	}

    var provider = {
        $get: Frontpress,
        configure: configure
    };

    return provider;
}

module.provider("$Frontpress", FrontpressProvider);
