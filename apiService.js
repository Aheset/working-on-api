var app=angular.module("ourApp");

app.factory("randomQuoteService", function($http){

	var randomQuote = "";
	function getRandomQuotes(){
		return $http.get("https://reddit.com/r/"+randomQuote+"/.json");
	}

	return{

		chooseRandomQuote: function(quote){
			randomQuote = quote;
		},

		getRandomQuotes: getRandomQuotes

	};

});
/*
-X POST --include 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies' \
  -H 'X-Mashape-Key: Oddf3M91XqmshCmhkachuZEw2PvQp1D8lPyjsntxH8r5SihYJ9' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json'
•	The Callback URL is: http://guardian.mashape.com/callback*/
