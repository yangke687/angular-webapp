'use strict';

angular.module('app', ['ui.router', 'ngCookies']).run(['$rootScope', function($rootScope) {
	$rootScope.im = function() {
		console.log('im');
	}
}]);