"use strict";

function FullPostDirectiveController(FullPostModel, BlogModel){
    var vc = this;
    vc.vm = FullPostModel;
}

angular.module("frontpress.components.full-post").controller("FullPostDirectiveController", FullPostDirectiveController);
FullPostDirectiveController.$inject = ["FullPostModel", "BlogModel"];
