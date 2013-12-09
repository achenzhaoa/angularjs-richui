angular.module('RichUI',['ngRoute','ngAnimate','ngResource'])

.config(function($routeProvider) {
	$routeProvider
	.when('/mail',{
		controller:'MailApp',
		templateUrl:'../mailApp.html'
	})
	.when('/contact',{
		controller:'ContactApp',
		templateUrl:'../contactApp.html'
	})
	.when('/calendar',{
		controller:'CalendarApp',
		templateUrl:'../calendarApp.html'
	})
	.when('/setting',{
		controller:'SettingApp',
		templateUrl:'../settingApp.html'
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

.controller('MailApp',function($scope){

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

	$scope.lists = $resource('data/messageLists.json').query();
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

.controller('SettingApp',function($scope){

})

.filter('mailFolder',function(){

	return function(input){
			console.log(input);
			if(input.type==$scope.MailDefaultActiveTab){
				return input;
			}
		}
});
