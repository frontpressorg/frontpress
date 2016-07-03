(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostDirectiveController', PostDirectiveController);

    function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel){
    	var vc = this;
        var postSlug = $stateParams.postSlug;
        var fullPostPromise = FullPostModel.loadFullPostBySlug(postSlug);
        PageHeadModel.init();
        
        fullPostPromise.then(function(result){
            PageHeadModel.setPageTitle(FullPostModel.title);                     
            vc.disqusId = FullPostModel.slug;
    	});
	}

})();
