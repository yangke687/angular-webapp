'use strict';

angular.module('app').value('dict', {}).run(['dict', '$http', function(dict, $http) {
	$http.get('/data/city.json')
		.then(function(res) {
			dict.city = res.data;
		}, function(err) {
			// error handling...
		});
	$http.get('/data/salary.json')
		.then(function(res) {
			dict.salary = res.data;
		}, function(err) {
			// error handling...
		});
	$http.get('/data/scale.json')
		.then(function(res) {
			dict.scale = res.data;
		}, function(err) {
			// error handling...
		});
}]);