(function(){
	'use strict';

	angular.module('ngpress.views.home').config(configHome);

    configHome.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configHome($stateProvider, $urlRouterProvider){

        var stateHome = {
            url: '/',
            template: '<home-view></home-view>',
            controller: 'HomeController as vc'
        };

   //      // var stateHomePagination = {
   //      //     url: '/pagina/{pageNumber:[0-9]{1,}}',
   //      //     template: '<list-all-blogs></list-all-blogs>',
   //      //     controller: 'ListBlogsPageController as vc'
   //      // };

   //      // var stateHomeSearch = {
   //      //     url: '/busca/:searchValue',
   //      //     template: '<list-all-blogs></list-all-blogs>',
   //      //     controller: 'ListBlogsPageController as vc'
   //      // };

   //      // var stateHomeSearchPagination = {
   //      //     url: '/busca/:searchValue/pagina/{pageNumber:[0-9]{1,}}',
   //      //     template: '<list-all-blogs></list-all-blogs>',
   //      //     controller: 'ListBlogsPageController as vc'
   //      // };

        $stateProvider.state('home', stateHome);
   //      $stateProvider.state('home-pagination', stateHomePagination);
   //      $stateProvider.state('home-search', stateHomeSearch);
   //      $stateProvider.state('home-search-pagination', stateHomeSearchPagination);

	}

})();