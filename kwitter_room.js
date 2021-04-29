
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

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

   function add_room(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"Add a room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("name",name);
      window.location="kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
