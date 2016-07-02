(function(){
    'use strict';

    angular.module("frontpress").run(frontpressRun);

    function frontpressRun(){

    	function extendStringPrototype(){
			if (!String.prototype.format) {
				String.prototype.format = function() {
					var args = arguments;
					return this.replace(/{(\d+)}/g, function(match, number) {
						return typeof args[number] != 'undefined' ? args[number] : match;
					});
				};
			}    	    		
    	}

    	extendStringPrototype();
    }

})();

