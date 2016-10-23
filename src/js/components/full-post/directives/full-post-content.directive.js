var module = angular.module("frontpress.components.full-post");

function FullPostContentDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {
			post: "=post"
		},
		templateUrl: function(){
			var templateUrl;
			switch($Frontpress.apiVersion){
				case "v2":
				templateUrl = "/js/components/full-post/templates/full-post-content-v2.template.html";
				break;
				case "v1":
				templateUrl = "/js/components/full-post/templates/full-post-content-v1.template.html";
				break;
			}
			return templateUrl;
		},
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

module.directive("fullPostContent", FullPostContentDirective);
