(function(){	

	"use strict";

	angular.module('frontpress.components.pagination').directive('PaginationController', PaginationController);

	function PaginationController(PaginationModel){
		var vc = this;
		vc.vm = PaginationModel;
	}

})();