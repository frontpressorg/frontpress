(function(){

	angular.module('ngpress.apis.posts').provider('PostsApi', PostsApi);

	function PostsApi(){
		var configure = {
			wordpressBaseUrl: null,
			setWordpressBaseUrl: setWordpressBaseUrl,
		}

        var provider = {
            $get: PostsApi,
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
        		return AjaxModel.get('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2');
        	}

        	return restApi;
        }
	}
	
})();