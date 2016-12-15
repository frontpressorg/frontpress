var module = angular.module("frontpress.components.share");

function ShareController(ShareModel){
	var vc = this;
    vc.vm = ShareModel;
}

module.controller("ShareController", ShareController);
ShareController.$inject = ["ShareModel"];
