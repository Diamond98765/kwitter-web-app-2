
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyACQYEv3-vKxtMriq-yqf4dSaMdJGklnOQ",
    authDomain: "kwitter-a843d.firebaseapp.com",
    databaseURL: "https://kwitter-a843d-default-rtdb.firebaseio.com",
    projectId: "kwitter-a843d",
    storageBucket: "kwitter-a843d.appspot.com",
    messagingSenderId: "250397157120",
    appId: "1:250397157120:web:29edb52ba8756c60d635e5",
    measurementId: "G-WRWDXH75CQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

