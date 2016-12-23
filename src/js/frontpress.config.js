var module = angular.module("frontpress");

function FrontPressConfig($qProvider){
    $qProvider.errorOnUnhandledRejections(false);
}

module.config(FrontPressConfig);
