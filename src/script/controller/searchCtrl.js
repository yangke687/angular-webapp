'use strict';

angular.module('app')
	.controller('searchCtrl', ['dict', '$http', '$state', '$scope',
		function(dict, $http, $state, $scope) {
			$scope.tabList = [{
				id: 'city',
				name: '城市'
			}, {
				id: 'salary',
				name: '薪酬'
			}, {
				id: 'scale',
				name: '公司规模'
			}];
			$scope.sheet = {

			};
			$scope.tClick = function(id, name) {
				//console.log(id, name);
				//console.log('dict', dict);
				$scope.sheet.list = dict[id];
				$scope.sheet.visible = true;
				console.log($scope.sheet.list);
			};
			$scope.sClick = function(id, name) {
				console.log(id, name);
			}
			$http.get('/data/positionList.json')
				.then(function(res) {
					$scope.list = res.data;
				}, function(err) {
					// error handling...
				});
		}
	]);