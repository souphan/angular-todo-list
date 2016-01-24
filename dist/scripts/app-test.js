
keodoToDo.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});

var appRouter = angular.module("keodoToDo", ["ui.router"]);

var appAngular = angular.module("keodoToDo", ["firebase"]);

app.controller("KeodoToDoCtrl", ["$scope", $firebaseArray",
  function($scope, $firebaseArray) {
    var messagesRef = new Firebase("https://keodo-todo-list.firebaseio.com/");

  // download the data into a local object
  var syncObject = $firebaseObject(ref);

  // download the data from a Firebase reference into a (pseudo read-only) array
  // all server changes are applied in realtime
  $scope.messages = $firebaseArray(messagesRef);
                                 
  // create a query for the most recent 25 messages on the server
  var query = messagesRef.orderByChild("timestamp").limitToLast(25);

  // the $firebaseArray service properly handles database queries as well
  $scope.filteredMessages = $firebaseArray(query);

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
});
