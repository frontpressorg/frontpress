"use strict";

function ShareController(ShareModel){
	var vc = this;
    vc.vm = ShareModel;
}

angular.module("frontpress.components.share").controller("ShareController", ShareController);
ShareController.$inject = ["ShareModel"];
