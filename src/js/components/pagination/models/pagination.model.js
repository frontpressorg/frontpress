(function(){
	
	"use strict";

	angular.module('frontpress.components.pagination').factory('PaginationModel', PaginationModel);

	function PaginationModel(){
		var model = {
			lastPageNumber: null,
			pages: null,
			paginationSize: 4,
			generatePaginationFromCurrentPageNumber: generatePaginationFromCurrentPageNumber,
			setLastPageNumber: setLastPageNumber
		};

        function generatePaginationFromCurrentPageNumbergeneratePaginationFromCurrentPageNumber(nextPageNumber){
            var paginationPages = [];
            for(var i=0; i <= model.paginationSize; i++){
            	var paginationPageNumber = nextPageNumber + i + 1;
            	if(paginationPageNumber <= model.lastPageNumber) {
	                var paginationPage = {
	                    href: '/pagina/{0}'.format(paginationPageNumber),
	                    number: paginationPageNumber
	                };
	                paginationPages.push(paginationPage);            		
            	}
            };
            model.pages = paginationPages;
        }		

		function setPaginationSize(paginationSize){
			model.paginationSize = paginationSize;
		}

		function setLastPageNumber(lastPageNumber){
			model.lastPageNumber = lastPageNumber;
		}

		return model;
	}

})();