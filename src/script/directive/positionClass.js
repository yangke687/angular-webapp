'use strict';

angular.module('app').directive('appPositionClass',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/positionClass.html',
		scope: {
			com: '='
		},
		link: function($scope){
			$scope.showPositionList = function(index){
				console.log($scope);
				$scope.positionList = $scope.com.positionClass[index].positionList;
				$scope.isActive = index;
			}
			$scope.$watch('com', function(newVal){
	        	if(newVal) $scope.showPositionList(0);
	     	});
		}
	}
}]);