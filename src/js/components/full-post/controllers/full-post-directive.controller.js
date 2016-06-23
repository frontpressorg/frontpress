(function(){

	"use strict";

	angular.module('frontpress.components.full-post').controller('FullPostDirectiveController', FullPostDirectiveController);

	function FullPostDirectiveController(FullPostModel){
		var vc = this;
		vc.vm = FullPostModel;
	}

})();