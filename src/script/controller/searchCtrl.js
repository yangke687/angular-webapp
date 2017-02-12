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
			$scope.filterObj = {};
			var tabId = '';
			$scope.tClick = function(id, name) {
				//console.log(id, name);
				//console.log('dict', dict);
				tabId = id;
				$scope.sheet.list = dict[id];
				$scope.sheet.visible = true;
				console.log($scope.sheet.list);
			};
			$scope.sClick = function(id, name) {
				//console.log(id, name);
				//console.log('tabId', tabId);
				if (id) {
					angular.forEach($scope.tabList, function(item) {
						if (item.id === tabId)
							item.name = name;
					});
					$scope.filterObj[tabId + 'Id'] = id;
				} else { // 不限
					delete $scope.filterObj[tabId + 'Id'];
					angular.forEach($scope.tabList, function(item) {
						switch (item.id) {
							case 'city':
								item.name = '城市';
								break;
							case 'salary':
								item.name = '薪酬';
								break;
							case 'scale':
								item.name = '公司规模';
								break;
						}
					})
				}
			}
			$http.get('/data/positionList.json')
				.then(function(res) {
					$scope.list = res.data;
				}, function(err) {
					// error handling...
				});
		}
	]);