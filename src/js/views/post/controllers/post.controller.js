(function(){
	'use strict';

	angular.module('frontpress.views.post').controller('PostController', PostController);

    function PostController(FullPostModel, $stateParams){
    	var vc = this;
    	var postSlug = $stateParams.postSlug;
    	FullPostModel.loadFullPostBySlug(postSlug);
	}

})();
