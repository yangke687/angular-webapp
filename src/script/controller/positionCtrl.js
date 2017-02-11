'use strict';

angular.module('app')
	.controller('positionCtrl', ['cache', '$q', '$http', '$state', '$scope',
		function(cache, $q, $http, $state, $scope) {
			$scope.isLogin = false;
			$scope.im();
			cache.put('to', 'day');
			$http.get('/data/position-' + $state.params.id + '.json')
				.then(function(res) {
					console.log('position:', res.data);
					$scope.position = res.data;
					return res.data;
				}, function(err) {
					// error handling...
				})
				.then(function(pos) {
					$http.get('/data/company-' + pos.companyId + '.json')
						.then(function(res) {
							console.log('company', res.data);
							$scope.company = res.data;
						}, function(err) {
							// error handling...
						});
				}, function(err) {
					// error handling...
				});
		}
	]);