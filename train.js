"use strict";
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

  //Add to database
  $("#submit").on("click", function(event){
    event.preventDefault();
    let name = $("#train-name-input").val().trim();
    let destination = $("#destination-input").val().trim();
    let firstTrainTime = $("#first-train-input").val().trim();
    let frequency = $("#frequency-input").val().trim();

    $("#train-table").append(`<tr><td>${name}</td><td>${destination}</td><td>${firstTrainTime}</td><td>${frequency}</td></tr>`);

   database.ref().set({
       trainName: name,
        Destination: destination,
        FirstTrain : firstTrainTime,
        Frequency : frequency,
        
  });


  });


