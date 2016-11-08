var module = angular.module("frontpress.components.share");

function ShareModel($window, ApiManager){
	var model = {
		openShareWindow: openShareWindow
	};

	function openShareWindow(networkName, post){
		var baseUrl = $window.location.origin;	

		var shareUrl = networkShareUrls[networkName].replaceAll({
			"<site-url>": baseUrl,
			"<post-slug>": post.slug,
			"<post-title>": ApiManager.getPath(post, "postTitle")
		});

		$window.open(shareUrl, networkName + "-share", "width=550,height=235");

	}

	var networkShareUrls = {
		"facebook":"https://www.facebook.com/sharer/sharer.php?u=<site-url>/<post-slug>",
		"twitter":"https://twitter.com/intent/tweet?url=<site-url>/<post-slug>/&amp;text=<post-title>",
		"gplus": "https://plus.google.com/share?url=<site-url>/<post-slug>/&amp;t=<post-title>",
		"linkedin": "https://www.linkedin.com/shareArticle?url=<site-url>/<post-slug>&title=<post-title>"
	};

	return model;
}

module.factory("ShareModel", ShareModel);