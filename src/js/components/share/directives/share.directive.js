angular.module("frontpress.components.share").directive("share", share);

function share($Frontpress) {
	var directive = {
		restrict: "AE",
		scope: {
            post: "=post",
        },
		templateUrl: $Frontpress.getTemplateUrl("components.share"),
		controller: "ShareController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}
