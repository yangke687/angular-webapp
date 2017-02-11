'use strict';

angular.module('app', ['ui.router']).run(['$rootScope', function($rootScope) {
	$rootScope.im = function() {
		console.log('im');
	}
}]);