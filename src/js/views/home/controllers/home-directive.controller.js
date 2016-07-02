(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeDirectiveController', HomeDirectiveController);

    function HomeDirectiveController($stateParams, ListPostsModel, $state, $Frontpress){
        var vc = this;
        vc.vm = ListPostsModel;
        var firstNextPageNumber = 2;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        var params = {
            pageSize: $Frontpress.pageSize,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
        };

        vc.vm.loadPosts(params);

        function loadMorePostsAndPaginate(){
            var nextPageNumber = params.pageNumber ? params.pageNumber++ : firstNextPageNumber;
            var paginationOptions = {notify: false};
            vc.vm.loadPosts(params);
            $state.go('home-pagination', {pageNumber: nextPageNumber}, paginationOptions);
        }
    }

})();
