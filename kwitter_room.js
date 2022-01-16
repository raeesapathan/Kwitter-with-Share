//Your web app's Firebase configuration  Abhi's
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*var firebaseConfig = {
  apiKey: "AIzaSyB06qW1Rhd_6okd0NBCWw0emqqf2xssgQI",
  authDomain: "class-test-e49a1.firebaseapp.com",
  databaseURL: "https://class-test-e49a1-default-rtdb.firebaseio.com",
  projectId: "class-test-e49a1",
  storageBucket: "class-test-e49a1.appspot.com",
  messagingSenderId: "311820644182",
  appId: "1:311820644182:web:6de9df1966a739998f30f7",
  measurementId: "G-ET0FYBX513"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/



//ADD YOUR FIREBASE LINKS HERE
//Raeesa's firbase
var firebaseConfig = {
  apiKey: "AIzaSyDx8mT9-N8puL4A0dFmFkDiVKbqLeD0tH0",
  authDomain: "class-test-20b78.firebaseapp.com",
  databaseURL: "https://class-test-20b78-default-rtdb.firebaseio.com",
  projectId: "class-test-20b78",
  storageBucket: "class-test-20b78.appspot.com",
  messagingSenderId: "522905347900",
  appId: "1:522905347900:web:9dea0c6904039d96e86039",
  measurementId: "G-9H2QQBEW4C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose: "Adding Room Name" });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"; 
}
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Names-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("kwitter.html");
}


