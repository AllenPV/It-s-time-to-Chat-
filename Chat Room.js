var Username = localStorage.getItem("Username2");
document.getElementById("User_Name").innerHTML = "Welcome " + Username + "!";

function Add_Room_Name() {
    Room_name = document.getElementById("Room_name").value;
    firebase.database().ref("/").child(Room_name).update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("Room_name", Room_name);
    window.location = "kwitter_page.html";
}

function Get_Data() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey
                console.log("Room_name -" + Room_names);
                row = "<div class = 'Room_name'id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
            });
        });
}
Get_Data();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location("kwitter_page.html");
}