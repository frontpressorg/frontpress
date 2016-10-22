angular.module("frontpress.components.share").controller("ShareController", ShareController);

function ShareController($scope, $element, $attrs){
	var vc = this;
    var url;

    vc.share = function(network) {
        switch(network) {
            case "twitter":
                url = vc.getTwitterUrl($attrs.url);
                break;
            case "facebook":
                url = vc.getFacebookUrl($attrs.url);
                break;
            case "google":
                url = vc.getGoogleUrl($attrs.url);
                break;
        }

        if (url)
            window.open(url, network + "-share", "width=550,height=235");

        return false
    }

    vc.getFacebookUrl = function(url) {
        return "https://www.facebook.com/sharer/sharer.php?u=" + document.URL + url;
    }

    vc.getTwitterUrl = function(url) {
        return "https://twitter.com/intent/tweet?url=" + document.URL + url + "/&amp;text=" + $attrs.title;
    }

    vc.getGoogleUrl = function(url) {
        return "https://plus.google.com/share?url=" + document.URL + url + "/&amp;t=" + $attrs.title;
    }
}
