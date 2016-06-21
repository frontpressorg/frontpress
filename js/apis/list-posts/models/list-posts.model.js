(function(){

	angular.module('ngpress.apis.posts').provider('PostsApi', PostsApi);

	function PostsApi(){
		var configure = {
			wordpressBaseUrl: null,
			setWordpressBaseUrl: setWordpressBaseUrl,
		}

        var provider = {
            $get: SheetApi,
            configure: configure
        };
        return provider;


        function setWordpressBaseUrl(wordpressBaseUrl){
            configure.wordpressBaseUrl = wordpressBaseUrl;
        }

        PostsApi.$inject = ['AjaxModel'];        

        function PostsApi(AjaxModel){
        	var restApi = {
        		getAllPosts: getAllPosts,
        	}

        	function getAllPosts(){
        		
        	}

        	return restApi;
        }
	}
	
})();