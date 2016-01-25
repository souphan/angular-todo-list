var myapp = angular.module('myapp', ["ui.router"])
myapp.config(function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
$urlRouterProvider.otherwise("/route1")

$stateProvider
  .state('route1', {
      url: "/route1",
      templateUrl: "/templates/route1.html"
   })
  .state('route1.list', {
      url: "/list",
      templateUrl: "/templates/route1.list.html",
      controller: function($scope){
        $scope.items = ["Clean the hamster cage", "Complain about cleaning hamster cage"];
      }
    })

  .state('route2', {
      url: "/route2",
      templateUrl: "/templates/route2.html"
   })
  .state('route2.list', {
      url: "/list",
      templateUrl: "/templates/route2.list.html",
      controller: function($scope){
         $scope.things = ["A", "Set", "Of", "Things"];
        }
    })
  .state('landing', {
      url: '/',
      controller: 'LandingCtrl as landing',
      templateUrl: '/templates/landing.html'
    })

})