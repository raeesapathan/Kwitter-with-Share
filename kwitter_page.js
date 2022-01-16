/*YOUR FIREBASE LINKS Abhi's
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
*/

//Raeesa's firebase
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
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = " "; 
            snapshot.forEach(function (childSnapshot)
             {
                  childKey = childSnapshot.key; 
                  childData = childSnapshot.val(); 
                  if (childKey != "purpose") 
                  {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'><h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();
function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({ like: updated_likes });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}