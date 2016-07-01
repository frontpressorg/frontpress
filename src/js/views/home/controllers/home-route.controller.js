(function(){
    'use strict';

    angular.module('frontpress.views.home').controller('HomeRouteController', HomeRouteController);

    function HomeRouteController(BlogApi, MetadataManagerModel, $location){
        var vc = this;
        MetadataManagerModel.init();

        function _setPageMetaData(){
            var blogInformationPromise = BlogApi.getBlogInformation();
            blogInformationPromise.success(function(result){
                MetadataManagerModel.setPageTitle(result.name);
                MetadataManagerModel.setPageDescription(result.description);
                var canonical = $location.url();
                MetadataManagerModel.setPageCanonical(canonical);
            });                    
        }

        _setPageMetaData();

    }

})();