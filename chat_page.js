//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyD9BuMPt4y5wtkwJoG1GHR8tQtCdoQGhRw",
    authDomain: "kwitter-bbea2.firebaseapp.com",
    databaseURL: "https://kwitter-bbea2-default-rtdb.firebaseio.com",
    projectId: "kwitter-bbea2",
    storageBucket: "kwitter-bbea2.appspot.com",
    messagingSenderId: "443568410996",
    appId: "1:443568410996:web:46905a303cf42973601c21"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "index.html"
}
