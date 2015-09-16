angular.module('myApp').directive('expandDirective', function(){
    return {
      restrict: 'A',
      link:  function(scope, ele, attr){
          ele.on('click', function(ev){
              scope.isExpanded = !scope.isExpanded;
              
              if(!scope.hasBeenOpened){
                  scope.hasBeenOpened = true;
                  scope.replacableChildren = ele.children();
                  scope.firstChild = scope.replacableChildren[0];
              }
              if(scope.isExpanded){
                  ele.empty();
                  ele.append(scope.replacableChildren);
              } else {
                  ele.empty()
                  ele.append(scope.firstChild);
              }
          });
      }
    };
});