angular.module("frontpress.filters").filter("trustAsHtml", TrustAsHtml);

function TrustAsHtml($sce){
	function filter(text){
		return $sce.trustAsHtml(text);
	}

	return filter;
}

TrustAsHtml.$inject = ["$sce"];
