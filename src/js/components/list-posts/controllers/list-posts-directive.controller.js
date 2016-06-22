(function(){
	
	"use strict";

	angular.module('ngpress.components.list-posts').controller('ListPostsDirectiveController', ListPostsDirectiveController);

	function ListPostsDirectiveController(ListPostsModel){
		var vc = this;
		vc.vm = ListPostsModel;
		vc.vm.loadPosts();
	}

})();