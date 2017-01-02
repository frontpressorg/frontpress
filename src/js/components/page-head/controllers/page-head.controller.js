"use strict";

function PageHeadController(PageHeadModel){
    var vc = this;
    vc.vm = PageHeadModel;
}

angular.module("frontpress.components.page-head").controller("PageHeadController", PageHeadController);
PageHeadController.$inject = ["PageHeadModel"];
