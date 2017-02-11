'use stirct';

angular.module('app').controller('companyCtrl', ['$http', '$state', '$scope', function($http, $state, $scope) {
	$http.get('/data/company-' + $state.params.id + '.json')
		.then(function(res) {
			console.log('company', res.data);
			$scope.company = res.data;
			// broadcast event
			$scope.$broadcast('abc', {
				id: 2
			});
		}, function(err) {
			// error handling...
		});
	$scope.$on('cba', function(evt, data) {
		console.log("companyController received an event:", data);
	})
}]);