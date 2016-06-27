(function(){

    angular.module('frontpress.apis.posts').provider('PostsApi', PostsApi);

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
        // API documentation
        //https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/

        function PostsApi(AjaxModel){
            var sampleUrl = configure.wordpressBaseUrl + "/posts/";
            var restApi = {
                getAllPosts: getAllPosts,
                getPostBySlug: getPostBySlug
            }

            function _parseConfigsToParams(configs){
                var params = {};

                if(configs){
                    if(configs.pageSize) params.number = configs.pageSize;
                    if(configs.pageNumber) params.page = configs.pageNumber;
                    if(configs.context) params.context = configs.context;
                }
                return params;
            }

            function getAllPosts(configs){
                var params = _parseConfigsToParams(configs);
                return AjaxModel.get(sampleUrl, params);
            }

            function getPostBySlug(postSlug){
                var params = {
                    slug: postSlug,
                };

                var url = sampleUrl + 'slug:<post-slug>';
                url = url.replace('<post-slug>', postSlug);
                return AjaxModel.get(url);
            }

            return restApi;
        }
    }

})();
