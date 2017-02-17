'use strict';

angular.module('app').directive('appPositionList', ['$http', function($http) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionList.html',
		scope: { // 隔离作用域
			data: '=',
			filterObj: '=',
			isFavorite: '=',
		},
		link: function($scope) {
			$scope.select = function(item) {
				$http.post('/data/favorite.json', {
					id: item.id,
					select: !item.select,
				}).success(function(res) {
					item.select = !item.select;
				});
			}
		}
	};
}]);