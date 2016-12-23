var module = angular.module("sample-blog");

function SampleBlogConfig($FrontPressProvider){
    $FrontPressProvider.configure.load();
}

module.config(SampleBlogConfig);
