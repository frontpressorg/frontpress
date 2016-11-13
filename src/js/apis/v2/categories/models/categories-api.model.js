angular.module("frontpress.apis.categories").factory("CategoriesApi", CategoriesApi);

CategoriesApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

function CategoriesApi(AjaxModel, $FrontPress, ConfigsToParams){
    var categoriesBaseUrl = $FrontPress.restApiUrl + "/wp/v2/categories/";

    function getAllCategories(configs){
        var categoriesListUrl = categoriesBaseUrl;
        var params = ConfigsToParams.parse(configs);

        return AjaxModel.get(categoriesListUrl, params);
    }

    function getCategoryById(categoryId, configs){
        var categoryUrl = categoriesBaseUrl + "<category-id>";
        categoryUrl = categoryUrl.replace("<category-id>", categoryId);

        return AjaxModel.get(categoryUrl, configs);
    }

    return {
        getAllCategories: getAllCategories,
        getCategoryById: getCategoryById
    };
}
