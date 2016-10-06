angular.module('frontpress.components.list-posts').directive('listPostsTitle', ListPostsTitleDirective);

function ListPostsTitleDirective($Frontpress){
	var directive = {
		scope: {
			post: "=post"
		},
		restrict: 'E',
		controller: 'ListPostsTitleDirectiveController',
		controllerAs: 'vc',
		bindToController: true,
		templateUrl: function(){
			var templateUrl;
			switch($Frontpress.apiVersion){
				case "v2":
				templateUrl = "/js/components/list-posts/templates/list-posts-title-v2.template.html";
				break;
				case "v1":
				templateUrl = "/js/components/list-posts/templates/list-posts-title-v1.template.html";
				break;				
			}
			return templateUrl;
		}

	};

	return directive;
}
