angular.module("frontpress.components.full-post").controller("FullPostDirectiveController", FullPostDirectiveController);

function FullPostDirectiveController(FullPostModel, BlogModel){
	var vc = this;
	vc.vm = FullPostModel;
}
