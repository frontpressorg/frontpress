angular.module('frontpress.components.list-posts').factory('ListPostsModel', ListPostsModel);

function ListPostsModel(PostsApi, MediaApi, $q, SlugsMapModel, ApiManager){
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

            featuredImagesPromise.success(function(result){
                defer.resolve(result);
            });
            return defer.promise;
        }

        postPromises.getAllPostsPromise().then(function(postsResult){
            model.totalPostsNumber = parseInt(ApiManager.getPath(postsResult, 'totalPostsNumber'));            
            var allPosts = ApiManager.getPath(postsResult, 'allPostsPath');

            SlugsMapModel.updateFromPosts(allPosts);      

            if(model.postsList){
                model.postsList = model.postsList.concat(allPosts);
            } else {
                model.postsList = allPosts;
            }

            defer.resolve(model.postsList);

            model.isLoadingPosts = false;
        });

        return defer.promise;

        
    }
}
