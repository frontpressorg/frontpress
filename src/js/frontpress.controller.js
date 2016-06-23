(function(){
	'use strict';

	angular.module('frontpress').controller('FrontPressController', FrontPressController);

    function FrontPressController(BlogInformationModel){
    	var vc = this;
    	BlogInformationModel.loadBlogInformation();
    	vc.blog = BlogInformationModel;
	}

})();