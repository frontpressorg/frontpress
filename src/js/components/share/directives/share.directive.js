angular.module("frontpress.components.share").directive("share", share);

function share($FrontPress) {
	var directive = {
		restrict: "AE",
		scope: {
            post: "=post",
        },
		templateUrl: $FrontPress.getTemplateUrl("components.share"),
		controller: "ShareController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}
share.$inject = ["$FrontPress"];
