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
            var sampleUrl = configure.wordpressBaseUrl + "/posts/";
        	var restApi = {
        		getAllPosts: getAllPosts,
                getPostBySlug: getPostBySlug
        	}

        	function getAllPosts(){
                var params = {
                    number: 10,
                    context: 'embed'
                };
                return AjaxModel.get(sampleUrl, params);
            }

            function getPostBySlug(postSlug){
                var params = {
                    slug: postSlug,
                };

                // var url = sampleUrl + '/slug:<post-slug>';
                // url = url.replace('<post-slug>', slug);
        		return AjaxModel.get(sampleUrl, params);
            }

        	return restApi;
        }
	}

})();