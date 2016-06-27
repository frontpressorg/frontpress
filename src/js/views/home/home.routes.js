(function(){
	'use strict';

	angular.module('frontpress.views.home').config(configHome);

    configHome.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configHome($stateProvider, $urlRouterProvider){

        var stateHome = {
            url: '/',
            template: '<home-view></home-view>',
            controller: 'HomeController as vc'
        };

        var stateHomePagination = {
            url: '/page/{pageNumber:[0-9]{1,}}',
            template: '<home-view></home-view>',
            controller: 'HomeController as vc'
        };

        $stateProvider.state('home', stateHome);
        $stateProvider.state('home-pagination', stateHomePagination);
    }

})();
