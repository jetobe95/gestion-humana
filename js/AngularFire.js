



 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBzoRn4giHTWJ9ChRBNA5rP56ERjPhzjLE",
    authDomain: "gestion-humana.firebaseapp.com",
    databaseURL: "https://gestion-humana.firebaseio.com",
    projectId: "gestion-humana",
    storageBucket: "gestion-humana.appspot.com",
    messagingSenderId: "779624072038"
  };
  firebase.initializeApp(config);

  var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("Casos/Caso_001");
  // download the data into a local object
  //var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "data");
  $scope.mensajes=$firebaseArray(ref);
});