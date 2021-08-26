var firebaseConfig = {
    apiKey: "AIzaSyDOkIYKvTUEV_Sq_h0Ix4Xz2ZNZP0nt5SY",
    authDomain: "c93-practice-activity.firebaseapp.com",
    databaseURL: "https://c93-practice-activity-default-rtdb.firebaseio.com",
    projectId: "c93-practice-activity",
    storageBucket: "c93-practice-activity.appspot.com",
    messagingSenderId: "289393497916",
    appId: "1:289393497916:web:69250bc1a393a0866ab039"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send() {
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }