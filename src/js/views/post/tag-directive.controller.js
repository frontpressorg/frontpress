"use strict";

function TagDirectiveController($stateParams, ListPostsModel, $state, $FrontPress, BlogModel, PageHeadModel, $location, PaginationModel){
    var vc = this;
    vc.vm = ListPostsModel;
    var firstNextPageNumber = 2;
    vc.loadMorePostsAndPaginate = loadMorePostsAndPaginate;
    vc.isInfiniteScrollDisabled = !$FrontPress.infiniteScroll;
    PageHeadModel.init();

    var params = {
        pageSize: $FrontPress.pageSize,
        pageNumber: $stateParams.pageNumber ? $stateParams.pageNumber : 1
    };

    var loadPostsPromise = vc.vm.loadPosts(params);

    loadPostsPromise.then(function(loadedPosts){
        var totalPagesNumber = ListPostsModel.totalPostsNumber / $FrontPress.pageSize;
        PaginationModel.setLastPageNumber(totalPagesNumber);
        _setPaginationPages(params.pageNumber);
        if($FrontPress.apiVersion === "v2"){
            vc.vm.loadExternalFeaturedImages(loadedPosts);
        }
    });

    function _setPageMetaData(){

        var blogInformationPromise = BlogModel.getInformationPromise();

        blogInformationPromise.then(function(blogInformation){
            var homeReplaceRules = {
                ":siteName": blogInformation.name,
                ":siteDescription": blogInformation.description
            };
            PageHeadModel.parsePageTitle("home", homeReplaceRules);

        });

        var canonical = $location.absUrl().replace(/\/page\/[0-9]{1,}\/?/, "");
        PageHeadModel.setPageCanonical(canonical);
    }

    _setPageMetaData();

    function loadMorePostsAndPaginate(){
        params.pageNumber++;
        var nextPageNumber = params.pageNumber ? params.pageNumber : firstNextPageNumber;
        var paginationOptions = {notify: false};
        var loadPostsPromise = vc.vm.loadPosts(params);


        loadPostsPromise.then(function(loadedPosts){
            if($FrontPress.apiVersion === "v2"){
                vc.vm.loadExternalFeaturedImages(loadedPosts);
            }
        });

        _setPageMetaData();
        _setPaginationPages(params.pageNumber);
        $state.go("home-pagination", {pageNumber: nextPageNumber}, paginationOptions);
    }

    function _setPaginationPages(currentPageNumber){
        PaginationModel.generatePaginationFromCurrentPageNumber(currentPageNumber);
    }
}

angular.module("frontpress.views.tag").controller("TagDirectiveController", TagDirectiveController);
TagDirectiveController.$inject = ["$stateParams", "ListPostsModel", "$state", "$FrontPress", "BlogModel", "PageHeadModel", "$location", "PaginationModel"];
