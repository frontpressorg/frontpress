var module = angular.module("frontpress");

function FrontPressConfig($FrontPressProvider, $qProvider){
    $FrontPressProvider.configure.load();    
    $qProvider.errorOnUnhandledRejections(false);
}

module.config(FrontPressConfig);
