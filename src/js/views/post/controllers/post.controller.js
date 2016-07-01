(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostController', PostController);

    function PostController(FullPostModel, $stateParams, MetadataManagerModel){
    	var vc = this;
    	var postSlug = $stateParams.postSlug;
    	var fullPostPromise = FullPostModel.loadFullPostBySlug(postSlug);
        MetadataManagerModel.init();
    	
    	fullPostPromise.then(function(){
    		MetadataManagerModel.setPageTitle(FullPostModel.title);    		
    	});
	}

})();
