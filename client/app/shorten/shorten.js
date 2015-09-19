angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.postLink = function () {

    //we need to "shortly-ify" the link, too - before we add it? TS: I think we do this serverside - check on this. 
    Links.addLink($scope.data.link).then( function (res) {
      console.log("logging addlink Response data")
      console.log(res);
      return res.data.link;
    }).then(function() {
      $location.path('/links');
    });
      
    


  };

//WE GO THROUGH LINKROUTES.JS TO LINKCONTROLLER.JS. FOLLOW THIS PATH.
});
