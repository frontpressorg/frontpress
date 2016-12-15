angular.module("frontpress.components.list-posts").controller("ListPostsDirectiveController", ListPostsDirectiveController);

function ListPostsDirectiveController(ListPostsModel){
	var vc = this;
    vc.vm = ListPostsModel;
}
ListPostsDirectiveController.$inject = ["ListPostsModel"];
