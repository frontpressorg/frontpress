angular.module('frontpress.apis.categories').factory('CategoriesApi', CategoriesApi);

CategoriesApi.$inject = ['AjaxModel', '$Frontpress'];

function CategoriesApi(AjaxModel, $Frontpress){
    var categoriesBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getAllCategories: getAllCategories,
        getCategoriesByPostId: getCategoriesByPostId,
    };

    return restApi;

    function _parseConfigsToParams(configs){
        var params = {};

        if(configs){
            if(configs.pageSize) params.number = parseInt(configs.pageSize);
            if(configs.pageNumber) params.page = parseInt(configs.pageNumber);
            if(configs.context) params.context = configs.context;
            if(configs.fields) params.fields = configs.fields;
        }
        return params;
    }

    function getAllCategories(configs){
        var categoriesListUrl = categoriesBaseUrl;
        var params = _parseConfigsToParams(configs);
        return AjaxModel.get(categoriesListUrl, params);
    }

    function getCategoriesByPostId(postId, configs){
        var postUrl = categoriesBaseUrl + '<post-id>?fields=categories';
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, configs);
    }    
}
