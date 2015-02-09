'use strict';

//=== Testing gpaCtrl =============================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });


    }));

    it('dummy test', function(){
        expect(true).toEqual(true);
    });

    it('convert letter grades to numbers', function(){
        expect(toLetter("A")).toEqual(4);
    })

});

