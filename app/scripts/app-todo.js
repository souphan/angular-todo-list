var keodoToDo = angular.module('keodoToDo', ["ui.router", "firebase"])
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
    .state('history', {
        url: "/history",
        templateUrl: "/templates/task-history.html"
    })
})