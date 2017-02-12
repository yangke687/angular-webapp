'use strict';

angular.module('app').directive('appPositionList', [function() {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionList.html',
		scope: { // 隔离作用域
			data: '=',
			filterObj: '=',
		}
	};
}]);