angular.module("frontpress.components.full-post").controller("FullPostCategoriesListDirectiveController", FullPostCategoriesListDirectiveController);

function FullPostCategoriesListDirectiveController(FullPostModel){
	var vc = this;
	vc.vm = FullPostModel;
}
