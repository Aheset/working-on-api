var app = angular.module("ourApp");

app.controller("fizzBuzzController", function($scope, fizzBuzzService, $location){
	$scope.fizzBuzzController = function(){
		fizzBuzzService.decidefizzBuzz($scope.checkFizzBuzz);
		$location.path("/fizzBuzz.html");
	};
});

