angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  console.log("LinksController is loaded.")

  //set the data object to store the links that we get from our factory GET request to the database
  $scope.data = {};
  //here is our function "getLinks" that calls "Links.retrieveLinks()", which lives in the factory in services.js
  $scope.getLinks = function () {
    //we need to chain the promise here because the get request is asynchronous. The "then" would never execute in the factory.
      Links.retrieveLinks().then( function (res) {
        console.log('res.data in retrievelinks')
        console.log(res.data);
        $scope.data.links = res.data;

        console.log(res);
       })
      .catch(function (err) {
        console.error(err);
      });
  };
  $scope.getLinks(); 
});


// KM: Our factory is located in services.js




