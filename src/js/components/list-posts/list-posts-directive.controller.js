"use strict";

function ListPostsDirectiveController(ListPostsModel){
    var vc = this;
    vc.vm = ListPostsModel;
}

angular.module("frontpress.components.list-posts").controller("ListPostsDirectiveController", ListPostsDirectiveController);
ListPostsDirectiveController.$inject = ["ListPostsModel"];
