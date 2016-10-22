angular.module("frontpress.components.pagination").controller("PaginationController", PaginationController);

function PaginationController(PaginationModel){
	var vc = this;
	vc.vm = PaginationModel;
}
