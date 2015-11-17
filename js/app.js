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
	
		//placeholder
		return true;
	}
	
	$scope.passwordMatch = function() {
	
		//placeholder
		return true;
	}
	
}]);
