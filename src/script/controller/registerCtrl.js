'use strict';

angular.module('app')
	.controller('registerCtrl', ['$scope','$interval','$http', function($scope,$interval,$http) {
		$scope.submit = function() {
			console.log($scope.user);
		};
		$scope.send = function(){
			$http.get('/data/code.json').then(function(res){
				if(res.data.state===1){
					var count = 60;
					$scope.time = '60秒';
					var interval = $interval(function(){
						if(count <=0){
							$interval.cancel(interval);
							$scope.time = '';
							return;
						}
						count--;
						$scope.time = count + '秒';
					},1000);
				}
			},function(err){
				// error handling...
			});
		};
	}]);