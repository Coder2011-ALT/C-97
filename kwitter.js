var userName;
//ADD YOUR FIREBASE LINKS
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
function addUser() {
    user_name = document.getElementById("user_name").value;
    console.log("adding");
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding User",
        hello: user_name
    });
    localStorage.setItem("UserName", user_name);
    window.location = "kwitter_room.html";
}
if (1 === 1) {
    console.log("Equal it!");
}
else if (1 != 20) {
    console.log("Badhiya!");
}