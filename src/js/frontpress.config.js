"use strict";

function FrontPressConfig($qProvider){
    $qProvider.errorOnUnhandledRejections(false);
}

angular.module("frontpress").config(FrontPressConfig);
FrontPressConfig.$inject = ["$qProvider"];
