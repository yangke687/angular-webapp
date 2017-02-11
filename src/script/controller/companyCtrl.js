'use stirct';

angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
	$http.get('/data/company-'+$state.params.id+'.json')
		.then(function(res){
			console.log('company',res.data);
			$scope.company = res.data;
		},function(err){
			// error handling...
		});
}]);