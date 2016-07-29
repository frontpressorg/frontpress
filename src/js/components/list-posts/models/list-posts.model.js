angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

function ListPostsModel(PostsApi, $q){
    var model = {
        postsList: null,
        loadPosts: loadPosts,
        pageSize: null,
        pageNumber: 1,
        isLoadingPosts: null,
        totalPostsNumber: null,
        setTotalPostsNumber: setTotalPostsNumber,
    }

    return model;

    function setTotalPostsNumber(totalPostsNumber){
        model.totalPostsNumber = totalPostsNumber;
    }

    function loadPosts(params){
        model.isLoadingPosts = true;
        var defer = $q.defer();

        var configs = {
            fields: 'ID,title,date,featured_image,excerpt'
        };

        var allPostsPromise = PostsApi.getAllPosts(params, configs);

        allPostsPromise.success(function(result){
            model.totalPostsNumber = result.found;
            if(model.postsList){
                model.postsList = model.postsList.concat(result.posts);
            } else {
                model.postsList = result.posts;
            }
            defer.resolve();
            model.isLoadingPosts = false;
        });
        return defer.promise;
    }
}
