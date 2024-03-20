//    Import the functions you need from the SDKs you need;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use;
  // https://firebase.google.com/docs/web/setup#available-libraries;

  // Your web app's Firebase configuration;
const firebaseConfig = {
    apiKey: "AIzaSyBDkzQRjvCbUKWat0YGltlwNHjaOKEowSY",
    authDomain: "creativetutor-52fdc.firebaseapp.com",
    projectId: "creativetutor-52fdc",
    storageBucket: "creativetutor-52fdc.appspot.com",
    messagingSenderId: "1067480004484",
    appId: "1:1067480004484:web:cc80296fa12138e77c4fd1",
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
    set(ref(db, 'user/' + document.getElementById("username").value),
   {
        usernamme: document.getElementById("username").value,
        email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,



   });

   alert("Login Successful  !");
})
