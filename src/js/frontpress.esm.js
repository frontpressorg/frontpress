import angular from "angular";
import angularUiRouter from "angular-ui-router";
import ngInfiniteScroll from "ng-infinite-scroll";
import angularDisqus from "angular-disqus/angular-disqus";
import ajaxModel from "./components/ajax/ajax.module.esm";

angular.module("frontpress.es6", ["frontpress.components.ajax"]);
