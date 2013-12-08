angular.module('RichUI',['ngRoute','ngAnimate'])

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

.controller('AppCtrl',function($scope){
	$scope.apps = [
		{text:'Mail',href:"mail",appClass:'active'},
		{text:'Contacts',href:"contact",appClass:''},
		{text:'Calendar',href:'calendar',appClass:''},
		{text:'Settings',href:'setting',appClass:''}
	];

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

	$scope.folders = [
		{text:'inbox',unread:10},
		{text:'draft',unread:0},
		{text:'spam',unread:3},
		{text:'sent items',unread:5},
		{text:'my folders',unread:28}
	];

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

	$scope.lists = [
		{type:0,from:'Frank.chen@owmessging.com',to:'inbox user2',date:'2013-12-08',status:'success',subject:'This is only a test1'},
		{type:0,from:'Frank.chen@owmessging.com',to:'inbox user3',date:'2013-12-09',status:'',subject:'This is only a test2'},
		{type:0,from:'Frank.chen@owmessging.com',to:'inbox user4',date:'2013-12-10',status:'warning',subject:'This is only a test3'},
		{type:0,from:'Frank.chen@owmessging.com',to:'inbox user5',date:'2013-12-11',status:'',subject:'This is only a test4'},
		{type:0,from:'Frank.chen@owmessging.com',to:'inbox user6',date:'2013-12-12',status:'danger',subject:'This is only a test5'},
	
		{type:1,from:'Frank.chen@owmessging.com',to:'draft user2',date:'2013-12-08',status:'success',subject:'This is only a test1'},
		{type:1,from:'Frank.chen@owmessging.com',to:'draft user3',date:'2013-12-09',status:'',subject:'This is only a test2'},
		{type:1,from:'Frank.chen@owmessging.com',to:'draft user4',date:'2013-12-10',status:'warning',subject:'This is only a test3'},
		{type:1,from:'Frank.chen@owmessging.com',to:'draft user5',date:'2013-12-11',status:'',subject:'This is only a test4'},
		{type:1,from:'Frank.chen@owmessging.com',to:'draft user6',date:'2013-12-12',status:'danger',subject:'This is only a test5'}
	
	];
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
