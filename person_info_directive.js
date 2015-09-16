angular.module('myApp').directive('personMatchInfo', function(){
  return {
     templateUrl: 'person_info_template.html',
     scope: {
         person: '='
     }
  }; 
})