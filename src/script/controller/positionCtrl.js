'use strict';

angular.module('app')
	.controller('positionCtrl', ['cache', '$q', '$http', '$state', '$log', '$scope',
		function(cache, $q, $http, $state, $log, $scope) {
			$scope.isLogin = !!cache.getObj('user');
			$scope.message = $scope.isLogin ? '投递简历' : '去登录';
			$scope.im();
			cache.put('to', 'day');
			$http.get('/data/position.json?id=' + $state.params.id)
				.then(function(res) {
					//console.log('position:', res.data);
					$scope.position = res.data;
					// if backend data contians 'posted' property
					// then you can't post your resume either
					if ($scope.position.posted) {
						$scope.message = "已投递";
					}
					return res.data;
				}, function(err) {
					// error handling...
				})
				.then(function(pos) {
					$http.get('/data/company.json?id=' + pos.companyId)
						.then(function(res) {
							//console.log('company', res.data);
							$scope.company = res.data;
						}, function(err) {
							// error handling...
						});
				}, function(err) {
					// error handling...
				});
			$scope.go = function() {
				if ($scope.message !== '已投递')
					if ($scope.isLogin) {
						// sending resume
						$http.post('/data/handle.json', {
							id: $scope.position.id
						}).success(function(res) {
							$log.info(res);
							$scope.message = '已投递';
						});
					} else {
						$state.go('login');
					}
			}
		}
	]);