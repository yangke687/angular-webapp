'use strict';

angular.module('app').directive('appHead',[function(){
	return {
		restrict: 'A', // attribute => 'app-head'
		replace: true,
		templateUrl: 'view/template/head.html'
	};
}]);