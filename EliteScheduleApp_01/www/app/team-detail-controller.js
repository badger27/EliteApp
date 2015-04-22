
(function name(parameters) {
    'use strict';
    
    
    angular.module("eliteApp").controller('teamDetailCtrl', ['$stateParams',teamDetailCtrl]);
    console.log("this is teamDetails" + teamDetailCtrl);
  
    
    
    function teamDetailCtrl($stateParams) {
        var vm = this;
       
          console.log("$stateParams" , $stateParams);
    };
    
    
})();

