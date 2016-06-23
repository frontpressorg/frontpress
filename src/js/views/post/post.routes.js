(function(){
	'use strict';

	angular.module('frontpress.views.post').config(configPost);

    configPost.$inject = ["$stateProvider"];

    function configPost($stateProvider){

        var statePost = {
            url: '/:postSlug',
            template: '<post-view></post-view>',
            controller: 'PostController as vc'
        };

        $stateProvider.state('post', statePost);
    }

})();