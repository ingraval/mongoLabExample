'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField1 = "";
        $scope.textField2 = "";
        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getPets();

        $scope.addData = function(){
            if($scope.textField2 > 0) {

                if ($scope.textField1.length >= 1 && $scope.textField2.length >= 1) {
                    $http.post('api/pets', {text: $scope.textField1, weight: $scope.textField2}).success(function () {
                        $scope.getPets();
                    });

                    $scope.textField1 = "";
                    $scope.textField2 = "";
                }
            } else {
                alert("Invalid Weight, Weight must be larger than 0");
                return;
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getPets();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

    });