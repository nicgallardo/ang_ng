angular.module('portfolioApp', ["ngRoute"])
  .controller("HomeCtrl", function ($scope){
    console.log('I run in home controller')

  })
  .controller("AboutCtrl", function($scope, $location){
    $scope.path = $location.path()
  })
  .controller("PortfolioCtrl", function($scope, $location){
    $scope.path = $location.path()
  })
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: '/partials/about.html',
        controller: 'AboutCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'partials/portfolio.html',
        controller: 'PortfolioCtrl'
      })
    $locationProvider.html5Mode(true)
  })
