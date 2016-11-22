angular.module("frontpress.views.home").directive("homeView", HomeViewDirective);

function HomeViewDirective($FrontPress){
	var directive = {
		scope: {},
		templateUrl: $FrontPress.getTemplateUrl("views.home"),
		restrict: "AE",
		controllerAs: "vc",
		bindToController: true,
		controller: "HomeDirectiveController",
		replace: true
	};
	return directive;
}
