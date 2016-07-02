(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostDirectiveController', PostDirectiveController);

    function PostDirectiveController(FullPostModel, $stateParams, MetadataManagerModel){
    	var vc = this;
        var postSlug = $stateParams.postSlug;
        var fullPostPromise = FullPostModel.loadFullPostBySlug(postSlug);
        MetadataManagerModel.init();
        
        fullPostPromise.then(function(result){
            MetadataManagerModel.setPageTitle(FullPostModel.title);                     
            vc.disqusId = FullPostModel.slug;
    	});
	}

})();
