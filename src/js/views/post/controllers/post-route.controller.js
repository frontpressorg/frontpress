(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostRouteController', PostRouteController);

    function PostRouteController(FullPostModel, $stateParams, MetadataManagerModel){
    	var vc = this;
    	var postSlug = $stateParams.postSlug;
    	var fullPostPromise = FullPostModel.loadFullPostBySlug(postSlug);
        MetadataManagerModel.init();
    	
    	fullPostPromise.then(function(result){
    		MetadataManagerModel.setPageTitle(FullPostModel.title);    		
    	});
	}

})();
