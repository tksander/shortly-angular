angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.postLink = function () {
    //we need to "shortly-ify" the link, too - before we add it?
    Links.addLink($scope.data.link).then( function (res) {
      return res.data.link;
    });

    $location.path('/links');
  };

//WE GO THROUGH LINKROUTES.JS TO LINKCONTROLLER.JS. FOLLOW THIS PATH.
});
