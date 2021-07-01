var userName = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome " + userName + "!";
var roomName;
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYs--QAj33jqRt9UqTeNdPTJ4yPnR3jlk",
      authDomain: "kwitter-a4ff9.firebaseapp.com",
      databaseURL: "https://kwitter-a4ff9-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4ff9",
      storageBucket: "kwitter-a4ff9.appspot.com",
      messagingSenderId: "302924286453",
      appId: "1:302924286453:web:35ecd734e05df249ae78bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Names - ", Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom() {
      roomName = document.getElementById("room_name").value;

      firebase.database().ref("/").child(roomName).update({
            purpose: "Adding room name"
      });

      localStorage.setItem("room_name", roomName);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.clear();
      window.location = "index.html";
}

