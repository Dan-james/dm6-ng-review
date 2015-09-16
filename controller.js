angular.module('myApp').controller('myCtrl', 
            function($scope, findMatches){
    
    $scope.$watch('matchingPerson', function(){
        //braveness within 1
      
        if(!$scope.matchingPerson){
            return;
        }
        
        $scope.matchingHeroes = findMatches.findMatches($scope.matchingPerson);
         
    }, true);
});