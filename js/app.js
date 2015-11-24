'use strict';
	
angular.module('ourApp', [])

.controller('ourCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.submitForm = function(ourForm) {
		alert("Thanks for the interest, "+ourForm.firstName.$modelValue+"!");
		console.log(ourForm);
	}
	
	$scope.resetForm = function() {
		//alert("Ok, let's try again");
		document.getElementById("form").reset();
	}
	
	$scope.getAge = function(DOB) {
        if (isNaN(Date.parse(DOB))) {
            return 0;
        } else {
            var age = (Date.now() - Date.parse(DOB));
            return (age > 410240038000); // 410240038000 is 13 years in milliseconds
        }
    }
	
	  $scope.passwordMatch = function(){
    	if ($scope.password === $scope.confirmpassword){
    		$scope.teamForm.confirmpassword.$setValidity('$invalid', true);
    		return true;
    	}
    	else{
    		$scope.teamForm.confirmpassword.$setValidity('$invalid', false);
    		return false;   	
    	}
    }
	
}]);
