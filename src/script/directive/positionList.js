'use strict';

angular.module('app').directive('appPositionList', ['cache','$http',function(cache,$http) {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionList.html',
		scope: { // 隔离作用域
			data: '=',
			filterObj: '=',
		},
		link: function($scope){
			$scope.user = cache.getObj('user') || '';
			$scope.select = function(item){
				$http.post('/data/favorite.json',{
					id: item.id,
					select: !item.select,
				}).success(function(res){
					item.select = !item.select;
				});
			}
		}
	};
}]);