(function(){
	
	"use strict";

	angular.module('frontpress.components.pagination').factory('PaginationModel', PaginationModel);

	function PaginationModel(){
		var model = {
			lastPageNumber: null,
			pages: null,
			paginationSize: 4,
			generatePaginationFromCurrentPageNumber: generatePaginationFromCurrentPageNumber,
			setLastPageNumber: setLastPageNumber,
			prevPage: null,
			nextPage: null,
			setPrevPage: setPrevPage,
			setNextPage: setNextPage,
		};

		function setNextPage(nextPage){
			model.nextPage = nextPage;
		}

		function setPrevPage(prevPage){
			model.prevPage = prevPage;
		}

        function generatePaginationFromCurrentPageNumber(currentPageNumber){
        	console.log(currentPageNumber);
            var paginationPages = [];

            if(currentPageNumber > 1){
            	var prevPageNumber = currentPageNumber - 1;
            	var prevPage = {
            		href: '/pagina/{0}'.format(prevPageNumber),
            		number: prevPageNumber
            	};
            	model.setPrevPage(prevPage);
            }

            for(var i=0; i <= model.paginationSize; i++){
            	var paginationPageNumber = currentPageNumber + i;
            	if(paginationPageNumber <= model.lastPageNumber) {
	                var paginationPage = {
	                    href: '/pagina/{0}'.format(paginationPageNumber),
	                    number: paginationPageNumber
	                };
	                paginationPages.push(paginationPage);            		
            	}
            };

            if(currentPageNumber < model.lastPageNumber){
            	var nextPageNumber = currentPageNumber + 1;
            	var nextPage = {
            		href: '/pagina/{0}'.format(nextPageNumber),
            		number: nextPageNumber
            	};
            	model.setNextPage(nextPage);
            }            

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