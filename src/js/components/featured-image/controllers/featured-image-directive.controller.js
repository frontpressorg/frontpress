var module = angular.module("frontpress.components.featured-image");

function FeaturedImageDirectiveController(){
	var vc = this;
	console.log(vc.post);
}

module.controller("FeaturedImageDirectiveController", FeaturedImageDirectiveController);
