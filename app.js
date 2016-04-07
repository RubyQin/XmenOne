(function(){
	'use strict';

	angular
	    .module('myApp',[])
	    .controller('mainCtrl', mainCtrl);

	function mainCtrl($scope,Xmen){
		var vm = this;
		vm.data = Xmen;
		vm.result = [];
		vm.selection = {};
		
		$scope.$watch('search',function(newVal,oldVal){
        if(newVal === ''){
          vm.data = Xmen;
        }

        vm.selection = vm.data.cast[0]; 
    });
	}
})();