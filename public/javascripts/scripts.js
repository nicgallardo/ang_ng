angular.module('portfolioApp', ["ngRoute"])
  .controller("HomeCtrl", function ($scope){
    setTimeout(function(){
      document.getElementById('home-input').style.visibility = "visible";
      $(".custom-input").focus();
      setTimeout(function(){
        console.log('i ran after the vis appeared')
      }, 2000)
    },12700);

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
