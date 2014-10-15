

//http://cms.thescore.com/api/v1/rivers/nba/news?limit=20&embed_ids=true&include_pinned=true


var nbaNews = angular.module('nbaNews', [ 'ngResource' ]);

nbaNews.controller('mainCtrl',  function($scope, $http) {


	$scope.title = 'NBA News';

	$scope.newsArticles = [];


	$scope.getData = function (endPoint) {

	    var httpObject = {
	        method: endPoint.method || 'GET',
	        url: endPoint.endPointURL
	      };

	    $http(httpObject).then(function (result) {

	      console.log('RESULT IS', result);

	      $scope.newsArticles = result.data.articles.map(function(eachArticle){

	      	return {
	      		title: eachArticle.title,
	      		mainImage: eachArticle.feature_image_url
	      	};

	      });

	      console.log('$scope.newsArticles', $scope.newsArticles);

	    });

  	};

  	// makes request
  	$scope.getData({
  		endPointURL: 'http://cms.thescore.com/api/v1/rivers/nba/news?limit=20&embed_ids=true&include_pinned=true',
  		method: 'GET'
  	});


});