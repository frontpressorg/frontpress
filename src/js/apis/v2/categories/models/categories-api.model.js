angular.module('frontpress.apis.categories').factory('CategoriesApi', CategoriesApi);

CategoriesApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function CategoriesApi(AjaxModel, $Frontpress, ConfigsToParams){
    var categoriesBaseUrl = $Frontpress.restApiUrl + '/wp/v2/categories/';

    var restApi = {
        getAllCategories: getAllCategories,
        getCategoryById: getCategoryById
    };

    return restApi;

    function getAllCategories(configs){
        var categoriesListUrl = categoriesBaseUrl;
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(categoriesListUrl, params);
    }

    function getCategoryById(categoryId, configs){
        var categoryUrl = categoriesBaseUrl + '<category-id>';
        categoryUrl = categoryUrl.replace('<category-id>', categoryId);
        return AjaxModel.get(categoryUrl, configs);
    }
}
