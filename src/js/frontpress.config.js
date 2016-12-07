var module = angular.module("frontpress");

function FrontPressConfig($FrontPressProvider){
    $FrontPressProvider.configure.load();    
}

module.config(FrontPressConfig);
