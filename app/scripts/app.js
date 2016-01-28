(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/route1")

        $stateProvider
        .state('route1', {
              url: "/route1",
              templateUrl: "/templates/route1.html"
           });
    }
     
angular
    .module('TodoApp', ['ui.router'])
    .config(config);
 })();

/*var myapp = angular.module('TodoApp', ["ui.router"])
myapp.config(function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
$urlRouterProvider.otherwise("/route1")

$stateProvider
  .state('route1', {
      url: "/route1",
      templateUrl: "/templates/route1.html"
   })
})*/
