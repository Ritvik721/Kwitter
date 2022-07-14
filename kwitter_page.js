const firebaseConfig = {
      apiKey: "AIzaSyB_7_62LKfSp90E7BVG0RY1_PMSqTFru1Q",
      authDomain: "kwitter-bb908.firebaseapp.com",
      databaseURL: "https://kwitter-bb908-default-rtdb.firebaseio.com",
      projectId: "kwitter-bb908",
      storageBucket: "kwitter-bb908.appspot.com",
      messagingSenderId: "287291542128",
      appId: "1:287291542128:web:776b705cdecb7ee3c682b5"
    };
    
    // Initialize Firebase
    firbase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name+"</h4>";
         message_with_tag = "<h4 class='message_h4'>"+message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firbase_message_id+" value"+like+" onclick='updateLike(this.id)'>Likes :"+like+"</button>";
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firbase.database().ref(room_name).child(message_id).update({
      like : updated_likes
      });

}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}