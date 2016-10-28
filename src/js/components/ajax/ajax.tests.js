describe("Ajax tests", function () {

    var AjaxModel;

    beforeEach(angular.mock.module("frontpress.components.ajax"));

    beforeEach(inject(function (_AjaxModel_) {
        AjaxModel = _AjaxModel_;
    }));

    it("should exist", function () {
        expect(AjaxModel).toBeDefined();
    });
});
