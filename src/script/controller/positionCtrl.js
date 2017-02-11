'use strict';

angular.module('app')
	.controller('positionCtrl',['$q','$http','$state','$scope',function($q,$http,$state,$scope){
		$scope.isLogin = false;
		$http.get('/data/position-'+$state.params.id+'.json')
			.then(function(res){
				console.log('position:',res.data);
				$scope.position = res.data;
				return res.data;
			},function(err){
				// error handling...
			})
			.then(function(pos){
				$http.get('/data/company-'+pos.companyId+'.json')
					.then(function(res){
						console.log('company',res.data);
						$scope.company = res.data;
					},function(err){
						// error handling...
					});
			},function(err){
				// error handling...
			});
}]);