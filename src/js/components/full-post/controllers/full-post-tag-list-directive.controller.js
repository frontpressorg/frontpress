angular.module('frontpress.components.full-post').controller('FullPostTagListDirectiveController', FullPostTagListDirectiveController);

function FullPostTagListDirectiveController(FullPostModel){
	var vc = this;
	vc.vm = FullPostModel;
}
