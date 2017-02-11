'use strict';

angular.module('app').directive('appTab', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/tab.html',
		scope: {
			list: '=',
			tabClick: '&',
		},
		link: function($scope) {
			$scope.click = function(item) {
				$scope.selectedId = item.id;
				$scope.tabClick(item); // 通知父级元素
				console.log($scope.tabClick);
			}
		}
	}
}]);