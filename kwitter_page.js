//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAa0qXM43jjCH9jfRNAf0LDjZQ7V2nyrSQ",
    authDomain: "let-s-chat-7abf9.firebaseapp.com",
    databaseURL: "https://let-s-chat-7abf9-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-7abf9",
    storageBucket: "let-s-chat-7abf9.appspot.com",
    messagingSenderId: "929686378339",
    appId: "1:929686378339:web:91e13ad2c610a1f3a22556"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("User_name");

function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
    });
    document.getElementById("msg").value="";
}

function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

function update_like(message_id){
    console.log("Clicked on the like button-"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}