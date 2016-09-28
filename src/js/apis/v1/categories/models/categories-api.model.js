angular.module('frontpress.apis.categories').factory('CategoriesApi', CategoriesApi);

CategoriesApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function CategoriesApi(AjaxModel, $Frontpress, ConfigsToParams){
    var categoriesBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getAllCategories: getAllCategories,
        getCategoriesByPostId: getCategoriesByPostId,
    };

    return restApi;

    function getAllCategories(configs){
        var categoriesListUrl = categoriesBaseUrl;
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(categoriesListUrl, params);
    }

    function getCategoriesByPostId(postId, configs){
        var postUrl = categoriesBaseUrl + '<post-id>?fields=categories';
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, configs);
    }    
}
