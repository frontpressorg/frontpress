(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeRouteController', HomeRouteController);

    function HomeRouteController(BlogApi, PageHeadModel, $location){
        var vc = this;
        PageHeadModel.init();

        function _setPageMetaData(){
            var blogInformationPromise = BlogApi.getBlogInformation();
            blogInformationPromise.success(function(result){
                PageHeadModel.setPageTitle(result.name);
                PageHeadModel.setPageDescription(result.description);
                var canonical = $location.url();
                PageHeadModel.setPageCanonical(canonical);
            });                    
        }

        _setPageMetaData();

    }

})();