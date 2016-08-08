angular.module('frontpress.components.pagination').factory('PaginationModel', PaginationModel);

function PaginationModel(PageHeadModel){
	var model = {
		lastPageNumber: null,
		pages: null,
		paginationSize: 4,
		generatePaginationFromCurrentPageNumber: generatePaginationFromCurrentPageNumber,
		setLastPageNumber: setLastPageNumber,
		prevPageNumber: null,
		nextPageNumber: null,
		setPrevPageNumber: setPrevPageNumber,
		setNextPageNumber: setNextPageNumber,
	};

	function setNextPageNumber(nextPageNumber){
		model.nextPageNumber = nextPageNumber;
		PageHeadModel.setRelNextNumber(nextPageNumber);
	}

	function setPrevPageNumber(prevPageNumber){
		model.prevPageNumber = prevPageNumber;
		PageHeadModel.setRelPrevNumber(prevPageNumber);
	}

    function generatePaginationFromCurrentPageNumber(currentPageNumber){
        var paginationPages = [];

        if(currentPageNumber > 1){
        	var prevPageNumber = currentPageNumber - 1;
        	model.setPrevPageNumber(prevPageNumber);
        }

        for(var i=1; i <= model.paginationSize; i++){
        	var paginationPageNumber = currentPageNumber + i;
        	if(paginationPageNumber <= model.lastPageNumber) {
                var paginationPage = {
                    number: paginationPageNumber
                };
                paginationPages.push(paginationPage);
        	}
        };

        if(currentPageNumber < model.lastPageNumber){
        	var nextPageNumber = currentPageNumber + 1;
        	model.setNextPageNumber(nextPageNumber);
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
