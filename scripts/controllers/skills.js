   angular.module('resumeExample').controller("skillCtrl", function($scope, $http) {
//Technical Skills
        $http.get('data1/technicalSkills.json').
        success(function(data, status, headers, config) {
            $scope.technicalSkillData = data;
        }).
        error(function(data, status, headers, config) {
            console.log(status);
        });
//functional Skills
        $http.get('data1/functionalSkills.json').
        success(function(data, status, headers, config) {
            $scope.functionalSkillData = data;
        }).
        error(function(data, status, headers, config) {
            console.log(status);
        });
    //accordion funtionality
   /* $scope.toggleNext() = function(){

    }
*/
    })
