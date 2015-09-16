angular.module('myApp').controller('myCtrl', 
            function($scope, heroService){
    
    $scope.heroes = heroService;
    
    $scope.$watch('matchingPerson', function(){
        //braveness within 1
      
        if(!$scope.matchingPerson){
            return;
        }
        
          var nextHeroes = $scope.heroes;
        if($scope.matchingPerson.hasOwnProperty('braveness')){
            nextHeroes = nextHeroes.filter(function(hero) {
              var difference = hero.braveness - $scope.matchingPerson.braveness;
              return Math.abs(difference) <= 1;
            });
        }
        
        //spandex within 2
        if($scope.matchingPerson.hasOwnProperty('spandexScore')){
            nextHeroes = nextHeroes.filter(function(hero) {
              var difference = hero.spandexScore - $scope.matchingPerson.spandexScore;
              return Math.abs(difference) <= 2;
            });
        }
        //capes exact match
        if($scope.matchingPerson.hasOwnProperty('capes')){
            nextHeroes = nextHeroes.filter(function(hero) {
              return $scope.matchingPerson.capes = hero.capes;
            });
        }
        
        $scope.matchingHeroes = nextHeroes;
    }, true);
});