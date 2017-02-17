'use strict';

angular.module('app')
	.controller('positionCtrl', ['cache', '$q', '$http', '$state', '$log','$scope',
		function(cache, $q, $http, $state, $log, $scope) {
			$scope.isLogin = !!cache.getObj('user');
			$scope.im();
			cache.put('to', 'day');
			$http.get('/data/position.json?id=' + $state.params.id)
				.then(function(res) {
					//console.log('position:', res.data);
					$scope.position = res.data;
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
			$scope.go = function(){
				if( $scope.isLogin ){
					// sending resume
					$http.post('/data/handle.json',{
						id: $scope.position.id
					}).success(function(res){
						$log.info(res);
					});
				}
				else{
					$state.go('login');
				}
			}
		}
	]);