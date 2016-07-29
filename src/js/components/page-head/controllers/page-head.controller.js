angular.module('frontpress.components.page-head').controller('PageHeadController', PageHeadController);

function PageHeadController(PageHeadModel){
	var vc = this;
	vc.vm =	PageHeadModel;
}
