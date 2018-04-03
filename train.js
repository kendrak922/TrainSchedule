"use strict";

$(document).ready(function() {
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCYbb79whB8H5LSboVJj8QajvFqmLUgpsY",
    authDomain: "traintime-13a14.firebaseapp.com",
    databaseURL: "https://traintime-13a14.firebaseio.com",
    projectId: "traintime-13a14",
    storageBucket: "",
    messagingSenderId: "959544447533"
  };
  firebase.initializeApp(config);

  const database = firebase.database();


  let name = "";
  let destination = "";
  let firstTrainTime = 0;
  let frequency = 0;


  //Add to database
  $("#submit").on("click", function(event){
    event.preventDefault();
     name = $("#train-name-input").val().trim();
     destination = $("#destination-input").val().trim();
     firstTrainTime = $("#first-train-input").val().trim();
     frequency = $("#frequency-input").val().trim();

   let trainSchedule = {
       trainName: name,
        Destination: destination,
        FirstTrain : firstTrainTime,
        Frequency : frequency,
        
  };
  database.ref().push(trainSchedule);

 $("#train-name-input").val("");
 $("#destination-input").val("");
 $("#first-train-input").val("");
 $("#frequency-input").val("");

  });


  database.ref().on("child_added", function(childSnapshot , prevChildKey) {

    $("#train-table").append(`<tr><td>${childSnapshot.val().trainName}</td><td>${childSnapshot.val().Destination}</td><td>${childSnapshot.val().FirstTrain}</td><td>${childSnapshot.val().Frequency}</td></tr>`);
    console.log(childSnapshot.val());
  });
});