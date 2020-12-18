const config = {
    apiKey: "AIzaSyAhNR0Y2ydMMtX4dyTv1FIGkOMJtAyCnmo",
    authDomain: "emeralds-and-rubies-3-abdfd.firebaseapp.com",
    databaseURL: "https://emeralds-and-rubies-3-abdfd.firebaseio.com",
    projectId: "emeralds-and-rubies-3-abdfd",
    storageBucket: "emeralds-and-rubies-3-abdfd.appspot.com",
    messagingSenderId: "725892772519",
    appId: "1:725892772519:web:d34ec13caf642b14612182",
    measurementId: "G-XWDKWDJRWW"
};
firebase.initializeApp(config);
User_name = localStorage.getItem("Username");
Room_name = localStorage.getItem("Room_name");

function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
        Name: User_name,
        message: message,
        like: 0
    });
    document.getElementById("msg").value = "";
}