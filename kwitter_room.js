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
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroom(this.id)' >#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}
getData();
username = localStorage.getItem("username")
document.getElementById("username").innerHTML = username
function logout() {
      localStorage.removeItem("roomname")
      localStorage.removeItem("username")
      window.location = "index.html"
}
function addroom() {
      roomname = document.getElementById("roomname").value
      document.getElementById("roomname").value = ""
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding a new room"
      })
      localStorage.setItem("roomname", name)
      window.location = "kwitter_page.html"
}
function redirecttoroom(name) {
      console.log(name);
      localStorage.setItem("roomname", name)
      window.location = "kwitter_page.html"
}