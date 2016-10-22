angular.module("frontpress.components.full-post").controller("FullPostTagsListDirectiveController", FullPostTagsListDirectiveController);

function FullPostTagsListDirectiveController(FullPostModel){
	var vc = this;
	vc.vm = FullPostModel;
}
