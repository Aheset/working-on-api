var app = angular.module("ourApp", ["ngRoute"]);
	app.config(function($routeProvider){
		$routeProvider
		.when("/",
		{
			controller: "homeController",
			templateUrl: "partials/landing.html"
		})
		.when("/input",
		{
			controller: "inputController",
			templateUrl: "partials/input.html"
		})
		.when("/output",
		{
			controller: "outputController",
			templateUrl: "partials/output.html"
		})
		.when("/api",
		{
			controller: "apiController",
			templateUrl: "partials/api.html"
		})
		.when("/fizzBuzz",
		{
			controller: "fizzBuzzController",
			templateUrl: "partials/fizzBuzz.html"
		})


		.otherwise({redirectTo: "/"});
	});