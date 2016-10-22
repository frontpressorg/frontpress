angular.module("frontpress.components.share").directive("share", share);

function share() {
	var directive = {
		restrict: "E",
		scope: {
            url: "@url",
            title: "@title"
        },
		templateUrl: "/js/components/share/templates/share.template.html",
		controller: "ShareController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}
