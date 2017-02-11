'use strict';

angular.module('app').directive('appPositionInfo',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionInfo.html',
		scope: {
			pos: '=',
			isActive: '=',
			isLogin: '=',
		},
		link: function(scope){
			console.log('scope',scope);
			scope.imagePath = scope.isActive ? 'image/star-active.png' : 'image/star.png';
		}
	}
}]);