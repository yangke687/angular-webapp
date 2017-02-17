'use strict';

angular.module('app').directive('appHead',['cache',function(cache){
	return {
		restrict: 'A', // attribute => 'app-head'
		replace: true,
		templateUrl: 'view/template/head.html',
		link: function($scope){
			$scope.user = cache.getObj('user');
		}
	};
}]);