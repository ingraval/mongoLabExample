'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
        scope.textField1 = "firstPet";
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('testing addData function' , function(){
        scope.textField2 = 0;
        expect(scope.addData()).toEqual(alert("Invalid Weight, Weight must be larger than 0"))
    });

    it("testing heaviestPet function" , function(){
        scope.data.push({text: "pet 1", weight: 50});
        scope.data.push({text: "pet 2", weight: 60});
        expect(scope.heaviestPet()).toEqual("pet 2 weighs 60")
    })

});
