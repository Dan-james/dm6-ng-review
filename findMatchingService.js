angular.module('myApp').service('findMatches', function(heroService){
    return {
        
       findMatches: function(criteriaObject){
           
        var nextHeroes = heroService;
           
        if(criteriaObject.hasOwnProperty('braveness')){
            nextHeroes = nextHeroes.filter(function(hero) {
              var difference = hero.braveness - criteriaObject.braveness;
              return Math.abs(difference) <= 1;
            });
        }
        
        //spandex within 2
        if(criteriaObject.hasOwnProperty('spandexScore')){
            nextHeroes = nextHeroes.filter(function(hero) {
              var difference = hero.spandexScore - criteriaObject.spandexScore;
              return Math.abs(difference) <= 2;
            });
        }
        //capes exact match
        if(criteriaObject.hasOwnProperty('capes')){
            nextHeroes = nextHeroes.filter(function(hero) {
              return criteriaObject.capes = hero.capes;
            });
        }
        
        return nextHeroes;
       }
    }
});