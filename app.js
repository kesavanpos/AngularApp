var myApp = angular.module("FoodApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
  .state("home", {
      url: "/home",
      templateUrl: "views/homePage.html",
      // declare it here
      controller: "homeController",
  })

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});