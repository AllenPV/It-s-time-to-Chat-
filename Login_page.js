function Add_User() {
    var Username2 = document.getElementById("Username2").value;
    localStorage.setItem("Username2", Username2);
    window.location = "Chat room.html";
}