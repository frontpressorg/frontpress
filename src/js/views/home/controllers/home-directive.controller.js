(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeDirectiveController', HomeDirectiveController);

    function HomeDirectiveController($stateParams, ListPostsModel, $state, $Frontpress, BlogApi, PageHeadModel, $location, PaginationModel){
        var vc = this;
        vc.vm = ListPostsModel;
        var firstNextPageNumber = 2;
        vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
        PageHeadModel.init();
        
        var params = {
            pageSize: $Frontpress.pageSize,
            context: 'embed',
            pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
        };

        var blogInformationPromise = BlogApi.getBlogInformation();        
        var loadPostsPromise = vc.vm.loadPosts(params);

        loadPostsPromise.then(function(){
            var totalPagesNumber = ListPostsModel.totalPostsNumber / $Frontpress.pageSize;
            PaginationModel.setLastPageNumber(totalPagesNumber);
            _setPaginationPages(params.pageNumber);          
        });

        _setPageMetaData();

        function loadMorePostsAndPaginate(){
            params.pageNumber++;
            var nextPageNumber = params.pageNumber ? params.pageNumber : firstNextPageNumber;
            var paginationOptions = {notify: false};
            vc.vm.loadPosts(params);
            _setPageMetaData();
            _setPaginationPages(params.pageNumber);
            $state.go('home-pagination', {pageNumber: nextPageNumber}, paginationOptions);
        }

        function _setPaginationPages(currentPageNumber){
            PaginationModel.generatePaginationFromCurrentPageNumber(currentPageNumber);
        }

        function _setPageMetaData(){
            blogInformationPromise.success(function(result){
                if(angular.isUndefined($Frontpress.overrides) || angular.isUndefined($Frontpress.overrides.title)){
                    PageHeadModel.setPageTitle(result.name);                    
                } else {                    
                    PageHeadModel.setPageTitle($Frontpress.overrides.title);                    
                }

                PageHeadModel.setPageDescription(result.description);
                var canonical = $location.url();
                PageHeadModel.setPageCanonical(canonical);
            });                    
        }



    }

})();
