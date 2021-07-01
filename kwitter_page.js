let userName = localStorage.getItem("UserName");
let room_name = localStorage.getItem("room_name");
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

document.getElementById("roomAndUserName").innerHTML = "Welcome " + userName + " to " + room_name + "!";

function getData() {
      firebase.database().ref("/" + room_name).on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(
                        function (childSnapshot) {
                              childKey = childSnapshot.key; childData = childSnapshot.val();
                              if (childKey != "purpose") {
                                    firebase_message_id = childKey;
                                    message_data = childData;
                                    //Start code
                                    console.log(firebase_message_id);
                                    console.log(message_data);
                                    user_name = message_data['name'];
                                    message = message_data['message'];
                                    like = message_data['like'];
                                    name_with_tag = "<h4> " + user_name + "<img class='user_tick' src='tick.png'></h4>";
                                    message_tag = "<h4 class='message_h4'>" + message + "</h4>";
                                    like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>"
                                    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                                    console.log(like_button);
                                    row = name_with_tag + message_tag + like_button + span_with_tag;
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

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout() {
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("UserName");
}

function send() {
      msg = document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name: userName,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = null;
}
