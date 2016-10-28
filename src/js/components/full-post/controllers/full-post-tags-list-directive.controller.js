var module = angular.module("frontpress.components.full-post");

function FullPostTagsListDirectiveController(FullPostModel){
	var vc = this;
	vc.vm = FullPostModel;
}

module.controller("FullPostTagsListDirectiveController", FullPostTagsListDirectiveController);
