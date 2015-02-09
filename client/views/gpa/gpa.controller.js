'use strict';

angular.module('appModule')
    .controller('gpaCtrl', function($scope, $http){
        $scope.textField4 = "";
        $scope.textField5 = "";
        $scope.textField6 = "";

        $scope.data1 = [];

        $scope.getGpa = function(){
            $http.get('api/gpas').success(function(gpa) {
                $scope.data1 = gpa;
            });
        };

        $scope.getGpa();

        $scope.addGpaData = function(){
            if($scope.textField5 == "A" ||
                $scope.textField5 == "B" ||
                $scope.textField5 == "C" ||
                $scope.textField5 == "D" ||
                $scope.textField5 == "F") {

            }else {
                alert("THIS IS NOT A VALID GRADE!");
                return;
            }
            if($scope.textField6 > 0) {

                if ($scope.textField4.length >= 1 && $scope.textField5.length >= 1 && $scope.textField6.length >= 1) {
                    $http.post('api/gpas', {class: $scope.textField4, grade: $scope.textField5, credits: $scope.textField6}).success(function () {
                        $scope.getGpa();
                    });

                    $scope.textField4 = "";
                    $scope.textField5 = "";
                    $scope.textField6 = "";

                }
            } else {
                alert("Invalid Credits Amount");
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/gpas/' + $scope.data1[index]._id).success(function(){
                $scope.getGpa();
            });
        };

        $scope.toNumber = function(letter){
            var toReturn;
            if(letter == "A"){
                toReturn = 4;
            } else if (letter == "B"){
                toReturn = 3;
            } else if (letter == "C"){
                toReturn = 2;
            } else if (letter == "D"){
                toReturn = 1;
            } else if (letter == "F"){
                toReturn = 0;
            }
            return toReturn;
        }

        $scope.totalGpa = function(){
            var totalScore = 0;
            var totalCredits = 0;

            for(var i = 0; i < $scope.data1.length; i++){
                var grade = $scope.toNumber($scope.data1[i].grade);
                var credits = parseInt($scope.data1[i].credits);
                totalScore += credits*grade;
                totalCredits += credits;
            }
            return totalScore/totalCredits;
        }

    });