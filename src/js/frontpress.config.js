var module = angular.module("frontpress");

function FrontPressConfig($qProvider){
    $qProvider.errorOnUnhandledRejections(false);
}

FrontPressConfig.$inject = ["$qProvider"];

module.config(FrontPressConfig);
