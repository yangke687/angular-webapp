'use strict';

angular.module('app').config(['$validationProvider', function($validationProvider) {
	var expression = {
		phone: /^1[\d]{10}/,
		password: function(value) {
			var str = value + '';
			return str.length > 5;
		}
	};
	var defaultMsg = {
		phone: {
			success: '',
			error: '手机号长度必须是11位'
		},
		password: {
			success: '',
			error: '密码长度至少是6位'
		}
	};
	$validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);