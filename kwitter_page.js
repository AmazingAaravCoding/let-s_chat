//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyC9qNnQJOSXvox4gQGUVuaS0IyKRCX1RCU",
      authDomain: "kwitter-85603.firebaseapp.com",
      databaseURL: "https://kwitter-85603-default-rtdb.firebaseio.com",
      projectId: "kwitter-85603",
      storageBucket: "kwitter-85603.appspot.com",
      messagingSenderId: "947379857600",
      appId: "1:947379857600:web:e996ee673ce2528972a525",
      measurementId: "G-RBY66G1TMT"
};
firebase.initializeApp(firebaseConfig)
roomname=localStorage.getItem("roomname")
username=localStorage.getItem("username")
function getData() {
      firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location = "index.html"
}
function send() {
      message = document.getElementById("message").value
      firebase.database().ref(roomname).push({
            name:username,
            message:message,
            like:0
      })
      document.getElementById("message").value=""
}