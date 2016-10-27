angular.module("frontpress.views.home").directive("homeView", HomeViewDirective);

function HomeViewDirective($Frontpress){
	var directive = {
		scope: {},
		templateUrl: $Frontpress.getTemplateUrl("views.home"),
		restrict: "E",
		controllerAs: "vc",
		bindToController: true,
		controller: "HomeDirectiveController"
	};
	return directive;
}
