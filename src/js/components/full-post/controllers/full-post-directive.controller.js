(function(){
	
	"use strict";

	angular.module('ngpress.components.full-post').controller('FullPostDirectiveController', FullPostDirectiveController);

	function FullPostDirectiveController(FullPostModel){
		var vc = this;
		vc.vm = FullPostModel;
	}

})();