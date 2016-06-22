(function(){
	'use strict';

	angular.module('ngpress.views.post').controller('PostController', PostController);

    function PostController(FullPostModel, $routeParams){
    	var vc = this;    	
    	console.log($routeParams);
	}

})();