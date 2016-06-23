(function(){

	angular.module('ngpress.apis.blog').provider('BlogApi', BlogApi);

	function BlogApi(){
		var configure = {
			wordpressBaseUrl: null,
			setWordpressBaseUrl: setWordpressBaseUrl,
		}

        var provider = {
            $get: BlogApi,
            configure: configure
        };
        return provider;


        function setWordpressBaseUrl(wordpressBaseUrl){
            configure.wordpressBaseUrl = wordpressBaseUrl;
        }

        BlogApi.$inject = ['AjaxModel'];

        function BlogApi(AjaxModel){
            var sampleUrl = configure.wordpressBaseUrl;

            var restApi = {
        		getBlogInformation: getBlogInformation,
        	};

        	function getBlogInformation(){
                return AjaxModel.get(sampleUrl);
            }

        	return restApi;
        }
	}

})();