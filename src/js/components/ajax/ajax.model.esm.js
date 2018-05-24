const request = (url, params = {}, method, http) => {
    return http({
        url: url,
        method: method,
        params: params,
        cache: true
    });
};

export default class AjaxModel {

    constructor($http) {
        this.$http = $http;
    }

    get(url, params) {
        return request(url, params, "GET", this.$http);
    }

    post(url, params) {
        return request(url, params, "POST", this.$http);
    }

    put(url, params) {
        return request(url, params, "PUT", this.$http);
    }
}
AjaxModel.$inject = ["$http"];
