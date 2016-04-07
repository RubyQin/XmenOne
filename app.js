(function(){
	'use strict';

	angular
	    .module('myApp',[])
	    .controller('mainCtrl', mainCtrl);

	function mainCtrl($scope,Xmen){
		var vm = this;
		vm.data = Xmen;
		vm.result = [];
		
		$scope.$watch('search',function(newVal,oldVal){
        if(newVal === ''){
          vm.data = Xmen;
        }
    
    });
	}
})();