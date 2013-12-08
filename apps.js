angular.module('RichUI',['ngRoute','ngAnimate','richuiFilters','ngResource','calendarModule'])

.config(function($routeProvider) {
	$routeProvider
	.when('/mail',{
		controller:'MailApp',
		templateUrl:'mailApp.html'
	})
	.when('/contact',{
		controller:'ContactApp',
		templateUrl:'contactApp.html'
	})
	.when('/calendar',{
		controller:'CalendarApp',
		templateUrl:'calendarApp.html'
	})
	.when('/testing',{
		controller:'testingApp',
		templateUrl:'testingApp.html'
	})
	.otherwise({redirectTo:'/mail'})
})

.controller('AppCtrl',function($scope,$resource){
	
	$scope.apps = $resource('data/apps.json').query();

	$scope.defaultTab = 0 ;
	$scope.activeTab = function(index){
		$scope.defaultTab = index;
	}

	$scope.getTabClass = function(index){
		if(index == $scope.defaultTab){
			return 'active';
		}else{
			return '';
		}
	}
})

.controller('MailApp',function($scope,$resource){

	$scope.folders = $resource('data/folders.json').query();

	$scope.MailDefaultActiveTab = 0 ;

	$scope.getMailActiveTab = function(index){

		if($scope.MailDefaultActiveTab == index){
			return 'active';
		}else{
			return '';
		}

	};

	$scope.setMailActiveTab = function(index){

		$scope.MailDefaultActiveTab = index;
	};

	$scope.lists = $resource('data/messageLists.json').query();;
	//$scope.currentPreview = $scope.lists[0];
	$scope.getCurrentPreview = function(index){
		$scope.currentPreview = $scope.lists[index];
		$scope.currentPreview.index = index;
	}

})

.controller('ContactApp',function($scope){

})

.controller('CalendarApp',function($scope){

})

.controller('testingApp',function($scope){

});
