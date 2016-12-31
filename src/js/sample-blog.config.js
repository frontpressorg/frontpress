(function(){
	
	"use strict";

	angular.module("sample-blog").config(SampleBlogConfig);

	function SampleBlogConfig($FrontPressProvider){

		var frontPressConfiguration = {
			"restApiUrl": "https://www.vivadecora.com.br/revista/wp-json",
			"apiVersion": "v2",
			"pageSize": 5,
			"infiniteScroll": true,
			"routes": {
				"post": "/:postYear/:postMonth/:postDay/:postSlug",
				"home.pagination": "/pagina/:pageNumber"
			},
			"titles": {
				"post": ":postTitle - :siteName",
				"home": "Home - :siteName"
			},
			"overrides": {
				"siteName": "FrontPress Default Template"
			}
		};

		$FrontPressProvider.configure.load();  
	}

})();