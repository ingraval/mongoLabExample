'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($scope, $http){
        $scope.textField1 = "";
        $scope.textField2 = "";
        $scope.textField3 = "";

        $scope.data = [];

        $scope.getGpa = function(){
            $http.get('api/gpa').success(function(gpa) {
                $scope.data = gpa;
            });
        };

        $scope.getGpa();

        $scope.addGpaData = function(){
            if($scope.textField2 == "A" ||
                $scope.textField2 == "B" ||
                $scope.textField2 == "C" ||
                $scope.textField2 == "D" ||
                $scope.textField2 == "F") {

            }else {
                alert("THIS IS NOT A VALID GRADE!");
                return;
            }
            if($scope.textField3 > 0) {

                if ($scope.textField1.length >= 1 && $scope.textField2.length >= 1 && $scope.textField3.length >= 1) {
                    $http.post('api/gpa', {class: $scope.textField1, grade: $scope.textField2, credits: $scope.textField3}).success(function () {
                        $scope.getGpa();
                    });

                    $scope.textField1 = "";
                    $scope.textField2 = "";
                    $scope.textField3 = "";

                }
            } else {
                alert("Invalid Credits Amount");
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/gpa/' + $scope.data[index]._id).success(function(){
                $scope.getGpa();
            });
        };



    });