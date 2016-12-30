var module = angular.module("frontpress.components.frontpress-provider");

function FrontPressProvider(FrontPressConfigurationFile, $disqusProvider, $stateProvider){
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
		setRoutes: setRoutes,
		setTitles: setTitles,
		setInfiniteScroll: setInfiniteScroll,
		templateUrl: null,
		routes: null,
		titles: null,
		siteName: null,
		setSiteName: setSiteName
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

	function setRoutes(routes){
		configure.routes = routes;
	}

	function setTitles(titles){
		configure.titles = titles;
	}

	function setSiteName(siteName){
		configure.siteName = siteName;
	}

	function setInfiniteScroll(infiniteScroll){
		configure.infiniteScroll = infiniteScroll;
	}

	function _loadRoutes(){

		if(FrontPressConfigurationFile["routes"]){
			configure.setRoutes(FrontPressConfigurationFile["routes"]);
		}

		var defaultRoutesList = {
			"home": "/",
			"home.pagination": "/page/{pageNumber:[0-9]{1,}}",
			"post": "/:postSlug"
		};

		function _setRouteAsDefaultIfempty(){
			for(var defaultRouteKey in defaultRoutesList){
				if(!configure.routes.hasOwnProperty(defaultRouteKey)){
					configure.routes[defaultRouteKey] = defaultRoutesList[defaultRouteKey];
				}
			}
		}
		if(!configure.routes){
			configure.routes = defaultRoutesList;
		}
		else {
			_setRouteAsDefaultIfempty();
		}
	}

	function load(){

		var configsToFunctions = {
			restApiUrl: configure.setRestApiUrl,
			pageSize: configure.setPageSize,
			disqusShortname: $disqusProvider.setShortname,
			overrides: configure.setOverrides,
			apiVersion: configure.setApiVersion,
			templateUrl: configure.setTemplateUrl,
			routes: configure.setRoutes,
			titles: configure.setTitles,
			infiniteScroll: configure.setInfiniteScroll
		};

		for(var config in configsToFunctions){
			configsToFunctions[config](FrontPressConfigurationFile[config]);
		}

		var defaultTemplateUrlList = {
			"views.home": "/js/views/home/templates/home.template.html",
			"views.post": "/js/views/post/templates/post.template.html",
			"components.fullpost": "/js/components/full-post/templates/full-post.template.html",
			"components.fullpost.categories": "/js/components/full-post/templates/full-post-categories-list.template.html",
			"components.fullpost.tags": "/js/components/full-post/templates/full-post-tags-list.template.html",
			"components.fullpost.authorname": "/js/components/full-post/templates/full-post-author-name.template.html",
			"components.listposts": "/js/components/list-posts/templates/list-posts.template.html",
			"components.pagehead": "/js/components/page-head/templates/page-head.template.html",
			"components.postdate": "/js/components/post-date/templates/post-date.template.html",
			"components.featuredimage": "/js/components/featured-image/templates/featured-image.template.html",
			"components.pagination": "/js/components/pagination/templates/pagination.template.html",
			"components.share": "/js/components/share/templates/share.template.html"
		};

		var defaultTitlesList = {
			"home": ":siteName",
			"home.pagination": ":siteName :pageNumber",
			"post": ":siteName - :postTitle",
		};

		switch(configure.apiVersion){
			case "v2":
				defaultTemplateUrlList["components.fullpost.content"] = "/js/components/full-post/templates/full-post-content-v2.template.html";
				defaultTemplateUrlList["components.fullpost.title"] = "/js/components/full-post/templates/full-post-title-v2.template.html";
				defaultTemplateUrlList["components.listposts.excerpt"] = "/js/components/list-posts/templates/list-posts-excerpt-v2.template.html";
				defaultTemplateUrlList["components.listposts.title"] = "/js/components/list-posts/templates/list-posts-title-v2.template.html";
			break;
			case "v1":
				defaultTemplateUrlList["components.fullpost.content"] = "/js/components/full-post/templates/full-post-content-v1.template.html";
				defaultTemplateUrlList["components.fullpost.title"] = "/js/components/full-post/templates/full-post-title-v1.template.html";
				defaultTemplateUrlList["components.listposts.excerpt"] = "/js/components/list-posts/templates/list-posts-excerpt-v1.template.html";
				defaultTemplateUrlList["components.listposts.title"] = "/js/components/list-posts/templates/list-posts-title-v1.template.html";
			break;
		}

		function _setTemplateUrlAsDefaultIfEmpty(){
			for(var defaultTemplateUrlKey in defaultTemplateUrlList){
				if(!configure.templateUrl.hasOwnProperty(defaultTemplateUrlKey)){
					configure.templateUrl[defaultTemplateUrlKey] = defaultTemplateUrlList[defaultTemplateUrlKey];
				}
			}
		}

		function _setTitleAsDefaultIfEmpty(){
			for(var defaultTitleKey in defaultTitlesList){
				if(!configure.titles.hasOwnProperty(defaultTitleKey)){
					configure.titles[defaultTitleKey] = defaultTitlesList[defaultTitleKey];
				}
			}
		}

		if(angular.isUndefined(configure.templateUrl)){
			configure.templateUrl = defaultTemplateUrlList;
		} else {
			_setTemplateUrlAsDefaultIfEmpty();
		}

		if(angular.isUndefined(configure.titles)){
			configure.titles = defaultTitlesList;
		}
		else {
			_setTitleAsDefaultIfEmpty();
		}

        if (angular.isUndefined(FrontPressConfigurationFile.restApiUrl)) {
            throw "[frontpress missing variable]: restApiUrl is mandatory. You should provide this variable using frontpress.json file or $FrontPressProvider in you app config.";
        }

        if (angular.isUndefined(FrontPressConfigurationFile.apiVersion)) {
            throw "[frontpress missing variable]: apiVersion is mandatory. You should provide this variable using frontpress.json file or $FrontPressProvider in you app config.";
        }

        _loadRoutes();
        _setHomeStates();
		_setPostStates();

	}

	function _setHomeStates(){
	    var stateHome = {
	        url: configure.routes["home"],
	        template: "<home-view></home-view>",
	        controller: "HomeRouteController as vc"
	    };

	    var stateHomePagination = {
	        url: configure.routes["home.pagination"],
	        template: "<home-view></home-view>",
	        controller: "HomeRouteController as vc"
	    };

	    $stateProvider.state("home", stateHome);
	    $stateProvider.state("home-pagination", stateHomePagination);		
	}

	function _setPostStates(){

	    var statePost = {
	        url: configure.routes["post"],
	        template: "<post-view></post-view>",
	        controller: "PostRouteController as vc"
	    };

	    $stateProvider.state("post", statePost);		
	}


	function Frontpress(){
		var model = {
			pageSize: configure.pageSize,
			restApiUrl: configure.restApiUrl,
			overrides: configure.overrides,
			apiVersion: configure.apiVersion,
			templateUrl: configure.templateUrl,
			routes: configure.routes,
			titles: configure.titles,
			siteName: configure.siteName,
			infiniteScroll: configure.infiniteScroll,
			getTemplateUrl: getTemplateUrl,
		};

		function getTemplateUrl(templateName){
			return model.templateUrl[templateName];
		}

		return model;
	}

    var provider = {
        $get: Frontpress,
        configure: configure,
		getRoute: getRoute
    };

	function getRoute(routeName){
		return configure.routes[routeName];
	}

    return provider;
}

module.provider("$FrontPress", FrontPressProvider);

FrontPressProvider.$inject = ["FrontPressConfigurationFile", "$disqusProvider", "$stateProvider"];
