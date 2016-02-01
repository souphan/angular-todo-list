var keodoToDo = angular.module('keodoToDo', ["ui.router"])
keodoToDo.config(function($stateProvider, $urlRouterProvider){
    
  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/")

     $stateProvider
     .state('landing', {
         url: '/',
         controller: 'KeodoToDoCtrl as landing',
         templateUrl: '/templates/landing-todo.html'
     })
    .state('active', {
        url: "/active",
        templateUrl: "/templates/active-task.html"
    })
      .state('route1.list', {
          url: "/list",
          templateUrl: "/templates/route1.list.html",
          controller: function($scope){
            $scope.items = ["A", "List", "Of", "Items"];
          }
      })

    .state('history', {
        url: "/history",
        templateUrl: "/templates/task-history.html"
    })
})
/*
var keodoToDo = angular.module('keodoToDo', ["ui.router"])
keodoToDo.config(function($stateProvider, $urlRouterProvider){

// For any unmatched url, send to /route1
$urlRouterProvider.otherwise("/route1")

$stateProvider
  .state('route1', {
      url: "/task-history",
      templateUrl: "/templates/task-history.html"
   })
  .state('route1.list', {
      url: "/list",
      templateUrl: "/templates/route1.list.html",
      controller: function($scope){
        $scope.items = ["Clean the hamster cage", "Complain about cleaning hamster cage"];
      }
    })  
  .state('landing', {
      url: '/',
      templateUrl: "/templates/landing.html",
    })

})
*/
