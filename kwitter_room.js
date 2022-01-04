
//ADD YOUR FIREBASE LINKS
 firebaseConfig = {
  apiKey: "AIzaSyBvoFnQPp6Ied9DBhjOyfB-CvHIRz8_y4w",
  authDomain: "ritvik-d2aec.firebaseapp.com",
  databaseURL: "https://ritvik-d2aec-default-rtdb.firebaseio.com",
  projectId: "ritvik-d2aec",
  storageBucket: "ritvik-d2aec.appspot.com",
  messagingSenderId: "345492588887",
  appId: "1:345492588887:web:103438536c36242cff9612",
  measurementId: "G-X9GDP2MQHR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
