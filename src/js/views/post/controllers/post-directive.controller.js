var module = angular.module("frontpress.views.post");

function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel, SlugsMapModel, $FrontPress, CategoriesApi, ApiManager, BlogModel, $q){
	var vc = this;
    vc.vm = FullPostModel;
    var postSlug = $stateParams.postSlug;
    var cachedSlugs = SlugsMapModel.getCachedSlugs();

    var idProperty;
    switch($FrontPress.apiVersion){
        case "v2":
            idProperty = "id";
        break;
        case "v1":
            idProperty = "ID";
        break;
    }

    var postId;

    if($stateParams.postId){
        postId = $stateParams.postId;
    }
    else {
        postId = JSON.search(cachedSlugs, "//*[slug='{0}']/{1}".format(postSlug, idProperty))[0];
    }

    var fullPostPromise = FullPostModel.loadFullPostById(postId);
    var blogInformationPromise = BlogModel.getInformationPromise();

    PageHeadModel.init();


    var promises = [fullPostPromise, blogInformationPromise];
    $q.all(promises).then(function(result){
        
        var fullPostResult = result[0];
        var blogInformationResult = result[1];
        
        var postTitle = ApiManager.getPath(fullPostResult, "postTitle");
        var postDateInfo = ApiManager.getPath(fullPostResult, "postDate").getDateInfo();

        var titleReplaceRules = {
            ":postTitle": postTitle,
            ":year": postDateInfo.year,
            ":month": postDateInfo.month,
            ":day": postDateInfo.day,
            ":siteName": blogInformationResult.name,
            ":siteDescription": blogInformationResult.description,
        };

        PageHeadModel.parsePageTitle("post", titleReplaceRules);
        vc.disqusId = FullPostModel.slug;

    })
}

module.controller("PostDirectiveController", PostDirectiveController);
