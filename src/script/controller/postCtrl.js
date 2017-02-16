'use strict';

angular.module('app')
	.controller('postCtrl', ['$http', '$scope', function($http, $scope) {
		$scope.tabList = [{
			id: 'all',
			name: '全部',
		}, {
			id: 'pass',
			name: '邀请面试',
		}, {
			id: 'fail',
			name: '不合适'
		}];

		$http.get('/data/myPost.json').then(function(res) {
			$scope.positionList = res.data;
		}, function(err) {
			// error handling...
		});
		$scope.filterObj = {};
		$scope.tabClick = function(id, name) {
			switch (id) {
				case 'all':
					delete $scope.filterObj.state;
					break;
				case 'pass':
					$scope.filterObj.state = '1';
					break;
				case 'fail':
					$scope.filterObj.state = '-1';
					break;
			}
		}
	}]);