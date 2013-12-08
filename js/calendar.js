angular.module('calendarModule',[])

.directive('calendar',function(){

	return {

		restrict:'E',

		 replace : true,

		template:'<div id="calendar-ct"></div>',

		link:function PostLink(scope,element,attributs){

 			Ext.Loader.setConfig({
			    enabled: true,
			    paths: {
			        'Ext.calendar': 'ext-4.2.1.883/examples/calendar/src'
			    }
			});
			Ext.require([
			    'Ext.calendar.App'
			]);

			Ext.onReady(function(){
				Ext.create('Ext.calendar.App');
			});
	       
		}
		
	};
});
