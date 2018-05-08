"use strict";

function PaginationModel(PageHeadModel){
	var model = {
		lastPageNumber: null,
		pages: null,
		paginationSize: 4,
		prevPageNumber: null,
        nextPageNumber: null,
        setPrevPageNumber: setPrevPageNumber,
	};

	function setNextPageNumber(nextPageNumber){
		model.nextPageNumber = nextPageNumber;
		PageHeadModel.setRelNextNumber(nextPageNumber);
	}

	function setPrevPageNumber(prevPageNumber){
		model.prevPageNumber = prevPageNumber;
		PageHeadModel.setRelPrevNumber(prevPageNumber);
	}

    function setPaginationSize(paginationSize){
        model.paginationSize = paginationSize;
    }

    function setLastPageNumber(lastPageNumber){
        model.lastPageNumber = lastPageNumber;
    }

    model.setLastPageNumber = setLastPageNumber;
    model.setNextPageNumber = setNextPageNumber;

    function generatePaginationFromCurrentPageNumber(currentPageNumber){
        var paginationPages = [];
        currentPageNumber = parseInt(currentPageNumber);

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
        }

        if(currentPageNumber < model.lastPageNumber){
        	var nextPageNumber = currentPageNumber + 1;
        	model.setNextPageNumber(nextPageNumber);
        }

        model.pages = paginationPages;
    }

    model.generatePaginationFromCurrentPageNumber = generatePaginationFromCurrentPageNumber;

	return model;
}

angular.module("frontpress.components.pagination").factory("PaginationModel", PaginationModel);
PaginationModel.$inject = ["PageHeadModel"];
