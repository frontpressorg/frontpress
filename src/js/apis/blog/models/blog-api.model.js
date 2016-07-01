(function() {
  'use strict';

  angular.module('frontpress.apis.blog').provider('BlogApi', BlogApi);

  function BlogApi() {
    BlogApi.$inject = ['AjaxModel'];

    var configure = {
      wordpressBaseUrl: null,
      setWordpressBaseUrl: setWordpressBaseUrl,
    }

    function setWordpressBaseUrl(wordpressBaseUrl) {
      configure.wordpressBaseUrl = wordpressBaseUrl;
    }

    function blogApi(AjaxModel) {
      var sampleUrl = configure.wordpressBaseUrl;

      function getBlogInformation() {
        return AjaxModel.get(sampleUrl);
      }

      var restApi = {
        getBlogInformation: getBlogInformation,
      };
      
      return restApi;
    }

    var restApi = {
      $get: blogApi,
      configure: configure      
    }

    return restApi;
  }

})();