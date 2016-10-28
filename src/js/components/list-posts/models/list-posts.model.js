angular.module("frontpress.components.list-posts").factory("ListPostsModel", ListPostsModel);

function ListPostsModel(PostsApi, MediaApi, $q, SlugsMapModel, ApiManager){
    var model = {
        postsList: null,
        loadPosts: loadPosts,
        pageSize: null,
        pageNumber: 1,
        isLoadingPosts: null,
        totalPostsNumber: null,
        setTotalPostsNumber: setTotalPostsNumber,
        loadExternalFeaturedImages: loadExternalFeaturedImages
    }

    return model;

    function setTotalPostsNumber(totalPostsNumber){
        model.totalPostsNumber = totalPostsNumber;
    }    

    function loadExternalFeaturedImages(loadedPosts){
        var postPromises = {
            appendFeaturedImagesToPostsPromise: appendFeaturedImagesToPostsPromise,
        };

        function appendFeaturedImagesToPostsPromise(featuredMediaId){
            var defer = $q.defer();

            var featuredImagesPromise = MediaApi.getMediaById(featuredMediaId);
            
            featuredImagesPromise.success(function(result){
                defer.resolve(result);
            });

            
            return defer.promise;
        }

        for(var i=0; i < loadedPosts.length; i++){
            postPromises.appendFeaturedImagesToPostsPromise(loadedPosts[i].featured_media).then(function(featuredImagesResult){

                for(var j=0; j < model.postsList.length;j++){
                    if(model.postsList[j].featured_media === featuredImagesResult.id){
                        model.postsList[j].featured_image = featuredImagesResult.source_url;
                    }                
                }
            });                        
        }
    }       

    function loadPosts(params){
        model.isLoadingPosts = true;        
        var defer = $q.defer();

        var configs = {
            fields: "ID,title,date,featured_image,excerpt"
        };           

        var postPromises = {
            getAllPostsPromise: getAllPostsPromise,
        };

        function getAllPostsPromise(){
            var defer = $q.defer();

            var allPostsPromise = PostsApi.getAllPosts(params, configs);

            allPostsPromise.success(function(result){                                                        
                defer.resolve(result);
            });            
            return defer.promise;
        }

        postPromises.getAllPostsPromise().then(function(postsResult){
            model.totalPostsNumber = parseInt(ApiManager.getPath(postsResult, "totalPostsNumber"));            
            var allPosts = ApiManager.getPath(postsResult, "allPostsPath");

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
