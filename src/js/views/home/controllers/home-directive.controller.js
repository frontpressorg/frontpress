(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeDirectiveController', HomeDirectiveController);

    function HomeDirectiveController($stateParams, ListPostsModel, $state){
        var vc = this;
        vc.vm = ListPostsModel;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        var firstNextPageNumber = 2;
        var params = {
            pageSize: 10,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
        };

        vc.vm.loadPosts(params);

        function loadMorePostsAndPaginate(){
            var nextPageNumber = params.pageNumber ? params.pageNumber++ : firstNextPageNumber;
            var paginationOptions = {notify: false};
            vc.vm.loadPosts(params);
            $state.go('home-pagination', {pageNumber:nextPageNumber}, paginationOptions);
            console.log('chamei pelo loadMorePostsAndPaginate e o isLoadingPosts é '+ vc.vm.isLoadingPosts);
        }
    }

})();
