angular.module('richuiFilters',[])

.filter('mailforlder',function(){
	
	return function (input,folderType){
		var newInput = [];
		for(var i=0;i<input.length;i++){
			if(input[i].type==folderType){
				newInput.push(input[i]);
			}
		}
		return newInput;
	}
});