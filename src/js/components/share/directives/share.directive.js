angular.module("frontpress.components.share").directive("share", share);

function share($Frontpress) {
	var directive = {
		restrict: "E",
		scope: {
            url: "=url",
            title: "=title"
        },
		templateUrl: $Frontpress.getTemplateUrl("components.share"),
		controller: "ShareController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
