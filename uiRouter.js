var uiApp = angular.module("ourUiApp", ["ui.router"]);

uiApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html'

})

    // nested list with custom controller
    .state('home.palindrome', {
        url: '/palindrome',
        template: 'I could sure use a drink right now.'
    })

});