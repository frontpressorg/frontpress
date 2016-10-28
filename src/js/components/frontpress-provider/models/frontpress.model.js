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
			templateUrl: configure.setTemplateUrl
		};

		var defaultTemplateUrlList = {
			"views.home": "/js/views/home/templates/home.template.html",
			"views.post": "/js/views/post/templates/post.template.html",
			"components.fullpost": "/js/components/full-post/templates/full-post.template.html",
			"components.fullpost.categories": "/js/components/full-post/templates/full-post-categories-list.template.html",
			"components.fullpost.tags": "/js/components/full-post/templates/full-post-tags-list.template.html",
			"components.listposts": "/js/components/list-posts/templates/list-posts.template.html",
			"components.pagehead": "/js/components/page-head/templates/page-head.template.html",
			"components.share": "/js/components/share/templates/share.template.html"
		};

		function _setTemplateUrlAsDefaultIfEmpty(){
			for(var defaultTemplateUrlKey in defaultTemplateUrlList){
				if(!configure.templateUrl.hasOwnProperty(defaultTemplateUrlKey)){
					configure.templateUrl[defaultTemplateUrlKey] = defaultTemplateUrlList[defaultTemplateUrlKey];
				}			
			}			
		}

		for(var config in configsToFunctions){
			configsToFunctions[config](FrontpressConfigurationFile[config]);			
		}

		_setTemplateUrlAsDefaultIfEmpty();

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
