'use strict';

angular.module('app')
	.controller('loginCtrl', ['$http', 'cache', '$state', '$scope', function($http, cache, $state, $scope) {
		$scope.submit = function() {
			$http.post('data/login.json', $scope.user).success(function(res) {
				cache.put('user', res.data);
				$state.go('main');
			});
		}
	}]);