(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').controller('HeadMetadataController', HeadMetadataController);

	function HeadMetadataController(MetadataManagerModel){
		var vc = this;
		vc.vm =	MetadataManagerModel;
	}

})();