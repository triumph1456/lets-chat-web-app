//ADD YOUR FIREBASE LINKS HERE 
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
  document.getElementById("user_name").innerHTML="welcome "+ user_name;
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row ="<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirecToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "=chat_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "index.html"
}
function addRoom()

{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}