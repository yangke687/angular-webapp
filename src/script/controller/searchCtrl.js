'use strict';

angular.module('app')
	.controller('searchCtrl', ['$http', '$state', '$scope',
		function($http, $state, $scope) {
			$http.get('/data/positionList.json')
				.then(function(res) {
					$scope.list = res.data;
				}, function(err) {
					// error handling...
				});
		}
	]);