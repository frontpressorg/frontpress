angular.module('frontpress.views.post').controller('PostDirectiveController', PostDirectiveController);

function PostDirectiveController(FullPostModel, $stateParams, PageHeadModel, SlugsMapModel, $Frontpress, CategoriesApi){
	var vc = this;
    vc.vm = FullPostModel;
    var postSlug = $stateParams.postSlug;
    var cachedSlugs = SlugsMapModel.getCachedSlugs();	

    var idProperty;
    switch($Frontpress.apiVersion){
        case "v2":
            idProperty = "id";
        break;
        case "v1":
            idProperty = "ID";
        break;              
    }           
    
    var postId = JSON.search(cachedSlugs, '//*[slug="{0}"]/{1}'.format(postSlug, idProperty))[0]; 

    var fullPostPromise = FullPostModel.loadFullPostById(postId);
    
    fullPostPromise.then(function(result){
        console.log(result);

        if($Frontpress.apiVersion == "v2"){
            for(var i=0; i < result.categoriesIds.length; i++){
                vc.vm.isLoadingCategories = true;
                
                CategoriesApi.getCategoryById(result.categoriesIds[i]).success(function(result){
                    vc.vm.addCategory(result);
                    vc.vm.isLoadingCategories = false;
                });                        
            }            
        }

    });


    PageHeadModel.init();

    fullPostPromise.then(function(result){        
        
        var postTitle;
        switch($Frontpress.apiVersion){
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
