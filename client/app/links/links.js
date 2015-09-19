angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
<<<<<<< HEAD
  console.log("LinksController is loaded.")
=======
>>>>>>> 30cdef64a597d22587d23fe6429f5f27ce8cfa2d
  //set the data object to store the links that we get from our factory GET request to the database
  $scope.data = {};
  //here is our function "getLinks" that calls "Links.retrieveLinks()", which lives in the factory in services.js
  $scope.getLinks = function () {
    //we need to chain the promise here because the get request is asynchronous. The "then" would never execute in the factory.
      Links.retrieveLinks().then( function (res) {
<<<<<<< HEAD
        console.log("Inside retrieveLinks in links.js")
        $scope.data.links = res.data;
=======
        $scope.data.links = res.data;
        $scope.link = "www.buzzfeed.com";
>>>>>>> 30cdef64a597d22587d23fe6429f5f27ce8cfa2d
        console.log(res);
    });
  };
  $scope.getLinks();
});

<<<<<<< HEAD
// KM: Our factory is located in services.js
=======
//Our factory is located in services.js
>>>>>>> 30cdef64a597d22587d23fe6429f5f27ce8cfa2d


