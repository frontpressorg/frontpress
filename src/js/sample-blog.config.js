var module = angular.module("sample-blog");

function SampleBlogConfig($FrontPressProvider){
    // $FrontPressProvider.configure.loadFromFile();

	var configuration = {
	"restApiUrl": "https://demo.wp-api.org/wp-json",
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

	$FrontPressProvider.configure.load(configuration);  

}

module.config(SampleBlogConfig);
