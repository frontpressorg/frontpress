(function(){

	"use strict";

	angular.module('ngpress.views.home').directive('homeView', HomeViewDirective);

	function HomeViewDirective(){
		var directive = {
			scope: {},
			templateUrl: '/js/views/home/templates/home.template.html',
			restrict: 'E',
			controllerAs: 'vc',
			bindToController: true,
			controller: 'HomeController'
		};
		return directive;
	}
	
})();
