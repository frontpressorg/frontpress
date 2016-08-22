angular.module('frontpress.views.post').controller('PostDirectiveController', PostDirectiveController);

function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel, SlugsMapModel){
	var vc = this;
    vc.vm = FullPostModel;
    var postSlug = $stateParams.postSlug;
    var cachedSlugs = SlugsMapModel.getCachedSlugs();	
    var postId = JSON.search(cachedSlugs, '//*[slug="{0}"]/ID'.format(postSlug))[0]; 
    var fullPostPromise = FullPostModel.loadFullPostById(postId);
    PageHeadModel.init();

    fullPostPromise.then(function(result){
        PageHeadModel.setPageTitle(FullPostModel.title);
        vc.disqusId = FullPostModel.slug;
	});
}
