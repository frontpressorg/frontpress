describe("Ajax tests", function () {

    var AjaxModel, $httpBackend;

    beforeEach(angular.mock.module("frontpress.components.ajax"));

    beforeEach(inject(function (_AjaxModel_) {
        AjaxModel = _AjaxModel_;
    }));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get("$httpBackend");
        $httpBackend.when("GET", "/test").respond({calledMethod: "GET"});
        $httpBackend.when("POST", "/test").respond({calledMethod: "POST"});
        $httpBackend.when("PUT", "/test").respond({calledMethod: "PUT"});
    }));

    it("should exist", function () {
        expect(AjaxModel).toBeDefined();
    });

    it("HTTP GET method is working", function () {
        var callbackCalled = false;
        AjaxModel.get("/test").success(function(data){
            expect(data.calledMethod).toEqual("GET");
            callbackCalled = true;
        });

        $httpBackend.flush();
        expect(callbackCalled).toBe(true);
    });

    it("HTTP POST method is working", function () {
        var callbackCalled = false;
        AjaxModel.post("/test").success(function(data){
            expect(data.calledMethod).toEqual("POST");
            callbackCalled = true;
        });

        $httpBackend.flush();
        expect(callbackCalled).toBe(true);
    });

    it("HTTP PUT method is working", function () {
        var callbackCalled = false;
        AjaxModel.put("/test").success(function(data){
            expect(data.calledMethod).toEqual("PUT");
            callbackCalled = true;
        });

        $httpBackend.flush();
        expect(callbackCalled).toBe(true);
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
   });
});
