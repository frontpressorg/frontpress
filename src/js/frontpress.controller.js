(function(){
	'use strict';

	angular.module('ngpress').controller('FrontPressController', FrontPressController);

    function FrontPressController(BlogInformationModel){
    	var vc = this;
    	BlogInformationModel.loadBlogInformation();
    	vc.blog = BlogInformationModel;
	}

})();