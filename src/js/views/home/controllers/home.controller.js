(function(){
	'use strict';

	angular.module('frontpress.views.home').controller('HomeController', HomeController);

    function HomeController($stateParams, ListPostsModel, $state){
    	var vc = this;
        vc.vm = ListPostsModel;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        var params = {
            pageSize: 10,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
        };

        vc.vm.loadPosts(params);

        function loadMorePostsAndPaginate(){
            var nextPageNumber = params.pageNumber++;
            var paginationOptions = {notify: false};
            $state.go('home-pagination', {pageNumber:nextPageNumber}, paginationOptions);
            vc.vm.loadPosts(params);
        }
	}

})();
