'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($scope, $http){
        console.log("main controller loaded!");

        $scope.textField1 = "";
        $scope.textField2 = "";
        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        $scope.data = [];

        $scope.getPet = function(){
            $http.get('api/pets').success(function(pets) {
                $scope.data = pets;
            });
        };

        $scope.getPet();

        $scope.addData = function(){
            if($scope.textField2 > 0) {

                if ($scope.textField1.length >= 1 && $scope.textField2.length >= 1) {
                    $http.post('api/pets', {text: $scope.textField1, weight: $scope.textField2}).success(function () {
                        $scope.getPet();
                    });

                    $scope.textField1 = "";
                    $scope.textField2 = "";
                }
            } else {
                alert("Invalid Weight, Weight must be larger than 0");
            }
        };

        $scope.removeData = function(index){
            $http.delete('/api/pets/' + $scope.data[index]._id).success(function(){
                $scope.getPet();
            });
        };

        $scope.cat = function(str1, str2){
            return str1 + str2;
        };

        $scope.itemsInList = function(){
            return $scope.data.length;
        };

        $scope.heaviestPet = function(){
            var toReturn = "";
            if($scope.data.length == 0){
                toReturn = "There are no pets in the list.";
            } else if($scope.data.length == 1){
                toReturn = $scope.data[0].text + " weighs " + $scope.data[0].weight;
            } else if($scope.data.length >= 2) {
                for (var i = 0; i < $scope.data.length - 1; i++) {
                    if (parseInt($scope.data[i].weight) > parseInt($scope.data[i + 1].weight)) {
                        toReturn = $scope.data[i].text + " weighs " + $scope.data[i].weight;
                    } else {
                        toReturn = $scope.data[i + 1].text + " weighs " + $scope.data[i + 1].weight;
                    }
                }
            }
            return toReturn;
        };

    });