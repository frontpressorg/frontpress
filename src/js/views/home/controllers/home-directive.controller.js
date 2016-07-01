(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeDirectiveController', HomeDirectiveController);

    function HomeDirectiveController($stateParams, ListPostsModel, $state, BlogApi, MetadataManagerModel){
        var vc = this;
        vc.vm = ListPostsModel;
        var firstNextPageNumber = 2;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        var params = {
            pageSize: 6,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : firstNextPageNumber
        };

        vc.vm.loadPosts(params);
        MetadataManagerModel.init();

        function _setPageMetaData(){
            var blogInformationPromise = BlogApi.getBlogInformation();
            blogInformationPromise.success(function(result){
                MetadataManagerModel.setPageTitle(result.name);
                MetadataManagerModel.setPageDescription(result.description);
            });                    
        }

        _setPageMetaData();

        function loadMorePostsAndPaginate(){
            var nextPageNumber = params.pageNumber ? params.pageNumber++ : firstNextPageNumber;
            var paginationOptions = {notify: false};
            vc.vm.loadPosts(params);
            $state.go('home-pagination', {pageNumber: nextPageNumber}, paginationOptions);
        }
    }

})();
