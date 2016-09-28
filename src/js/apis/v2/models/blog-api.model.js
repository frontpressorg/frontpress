angular.module('frontpress.apis.blog').factory('BlogApi', BlogApi);

BlogApi.$inject = ['AjaxModel', '$Frontpress'];

function BlogApi(AjaxModel, $Frontpress) {
    var baseUrl = $Frontpress.restApiUrl;

    var restApi = {
        getBlogInformation: getBlogInformation,
    };

    return restApi;

    function getBlogInformation() {
        return AjaxModel.get(baseUrl);
    }
}
