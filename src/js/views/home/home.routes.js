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

        $stateProvider.state('home', stateHome);
    }

})();