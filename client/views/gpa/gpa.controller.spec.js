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
        expect(scope.toNumber("A")).toEqual(4);
    })

    it('calculated gpa', function(){
        scope.data1.push({class: "test class", grade: "B", credits: 5})
        expect(scope.totalGpa()).toEqual(3);
    })

    it('calculated more gpa', function(){
        scope.data1.push({class: "test class1", grade: "B", credits: 5})
        scope.data1.push({class: "test class2", grade: "A", credits: 5})
        expect(scope.totalGpa()).toEqual(3.5);
    })

});

