(function(){
	'use strict';

	angular.module('frontpress.views.home').controller('HomeController', HomeController);

    function HomeController($stateParams, ListPostsModel){
    	var vc = this;
        vc.vm = ListPostsModel;
        var params = {
            pageSize: 10,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? parseInt($stateParams.pageNumber) : 1
        };

        vc.vm.loadPosts(params);
	}

})();
