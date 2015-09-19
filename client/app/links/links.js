angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  //set the data object to store the links that we get from our factory GET request to the database
  $scope.data = {};
  //here is our function "getLinks" that calls "Links.retrieveLinks()", which lives in the factory in services.js
  $scope.getLinks = function () {
    //we need to chain the promise here because the get request is asynchronous. The "then" would never execute in the factory.
      Links.retrieveLinks().then( function (res) {
        $scope.data.links = res.data;
        $scope.link = "www.buzzfeed.com";
        console.log(res);
    });
  };
  $scope.getLinks();
});

//Our factory is located in services.js


