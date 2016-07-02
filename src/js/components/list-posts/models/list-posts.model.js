(function(){

    "use strict";

    angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

    function ListPostsModel(PostsApi){
        var model = {
            postsList: null,
            loadPosts: loadPosts,
            pageSize: 10,
            pageNumber: 1,
            isLoadingPosts: null,
        }

        return model;

        function loadPosts(params){
            model.isLoadingPosts = true;
            var configs = {
                fields: 'ID,title,date,featured_image,excerpt'
            };

            var allPostsPromise = PostsApi.getAllPosts(params, configs);

            allPostsPromise.success(function(result){
                if(model.postsList){
                    model.postsList = model.postsList.concat(result.posts);                    
                } else {
                    model.postsList = result.posts;                                        
                }
                model.isLoadingPosts = false;
            });
        }
    }

})();
