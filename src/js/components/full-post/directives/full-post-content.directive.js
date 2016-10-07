angular.module('frontpress.components.full-post').directive('fullPostContent', FullPostContentDirective);

function FullPostContentDirective($Frontpress){
	var directive = {
		restrict: 'E',
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
		controller: 'FullPostContentDirectiveController',
		controllerAs: 'vc',
		bindToController: true
	};

	return directive;
}
