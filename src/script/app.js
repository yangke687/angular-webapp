'use strict';

angular.module('app', ['ui.router', 'ngCookies', 'validation', 'ngAnimate']).run(['$rootScope', function($rootScope) {
	$rootScope.im = function() {
		console.log('im');
	}
}]);