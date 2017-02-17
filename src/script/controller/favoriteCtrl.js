'use strict';

angular.module('app')
	.controller('favoriteCtrl', ['$http','$scope', function($http,$scope) {
		$http.get('/data/myFavorite.json').then(function(res){
			$scope.positionList = res.data;
		},function(err){
			// error handling...
		});
	}]);