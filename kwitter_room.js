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
    firebase.initializeApp(firebaseConfig);

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
 
    function addRoom()
    {
          room_name = document.getElementById("room_name", room_name);

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div_class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}



getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
