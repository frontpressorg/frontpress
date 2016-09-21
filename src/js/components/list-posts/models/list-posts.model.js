angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

function ListPostsModel(PostsApi, MediaApi, $q, SlugsMapModel){
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

    function loadPosts(params, shouldAppendFeaturedImageFromExternal){
        model.isLoadingPosts = true;        
        var defer = $q.defer();

        var configs = {
            fields: 'ID,title,date,featured_image,excerpt'
        };           

        var postPromises = {
            getAllPostsPromise: getAllPostsPromise,
            appendFeaturedImagesToPosts: appendFeaturedImagesToPosts
        };

        function getAllPostsPromise(){
            var defer = $q.defer();

            var allPostsPromise = PostsApi.getAllPosts(params, configs);

            allPostsPromise.success(function(result){                                                        
                defer.resolve(result);
            });            
            return defer.promise;
        }

        function appendFeaturedImagesToPosts(){
            var defer = $q.defer();

            var featuredImagesPromise = MediaApi.getMediaById(4017);
            featuredImagesPromise.success(function(result){
                defer.resolve(result);
            });
            return defer.promise;
        }

        postPromises.getAllPostsPromise().then(function(postsResult){
            model.totalPostsNumber = postsResult.found;
            
            SlugsMapModel.updateFromPosts(postsResult.posts);            

            if(model.postsList){
                model.postsList = model.postsList.concat(postsResult.posts);
            } else {
                model.postsList = postsResult.posts;
            }

            defer.resolve(model.postsList);

            model.isLoadingPosts = false;
        });

        return defer.promise;

        
    }
}
