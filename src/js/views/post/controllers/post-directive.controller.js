var module =angular.module("frontpress.views.post");

function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel, SlugsMapModel, $FrontPress, CategoriesApi){
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

    var postId = JSON.search(cachedSlugs, "//*[slug='{0}']/{1}".format(postSlug, idProperty))[0];

    var fullPostPromise = FullPostModel.loadFullPostById(postId);


    PageHeadModel.init();

    fullPostPromise.then(function(result){

        var postTitle;
        switch($FrontPress.apiVersion){
            case "v2":
                postTitle = FullPostModel.title.rendered;
            break;
            case "v1":
                postTitle = FullPostModel.title;
            break;
        }
        PageHeadModel.setPageTitle(postTitle);
        vc.disqusId = FullPostModel.slug;
	});
}

module.controller("PostDirectiveController", PostDirectiveController);
