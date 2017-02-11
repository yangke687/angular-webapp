'use strict';

angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/headBar.html',
		scope: {	// 隔离作用域
			text: '=',
		},
		link: function(scope){
			scope.back = function(){
				window.history.go(-1);
			}
		}
	};
}]);