angular.module("frontpress.views.home", 
				["ui.router", 
				"infinite-scroll", 
				"frontpress.components.list-posts", 
				"frontpress.components.pagination", 
				"frontpress.components.page-head", 
				"frontpress.apis.blog", 
				"frontpress.components.frontpress-provider"]);
