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
            var sampleUrl = "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/";
        	var restApi = {
        		getAllPosts: getAllPosts,
                getPostBySlug: getPostBySlug
        	}

        	function getAllPosts(){
                var params = {
                    number: 10
                };
                return AjaxModel.get(sampleUrl, params);
            }

            function getPostBySlug(slug){
                var url = sampleUrl + 'slug:<post-slug>';
                url = url.replace('<post-slug>', slug);
        		return AjaxModel.get(url);
            }

        	return restApi;
        }
	}
	
})();