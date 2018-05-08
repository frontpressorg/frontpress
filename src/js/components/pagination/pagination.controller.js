"use strict";

function PaginationController(PaginationModel){
    var vc = this;
    vc.vm = PaginationModel;
}

angular.module("frontpress.components.pagination").controller("PaginationController", PaginationController);
PaginationController.$inject = ["PaginationModel"];
