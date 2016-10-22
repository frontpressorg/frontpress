angular.module("frontpress.components.list-posts").directive("listPostsExcerpt", ListPostsExcerptDirective);

function ListPostsExcerptDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: "E",
		controller: "ListPostsGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		templateUrl: function(){
			var templateUrl;
			switch($Frontpress.apiVersion){
				case "v2":
				templateUrl = "/js/components/list-posts/templates/list-posts-excerpt-v2.template.html";
				break;
				case "v1":
				templateUrl = "/js/components/list-posts/templates/list-posts-excerpt-v1.template.html";
				break;				
			}
			return templateUrl;
		}

	};

	return directive;
}
