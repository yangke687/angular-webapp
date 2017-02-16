'use strict';

angular.module('app')
	.controller('meCtrl', ['cache', '$state', '$scope', function(cache, $state, $scope) {
		if (cache.getObj('user')) {
			$scope.user = cache.getObj('user');
		}

		$scope.logout = function() {
			cache.remove('user');
			$state.go('main');
		}
	}]);