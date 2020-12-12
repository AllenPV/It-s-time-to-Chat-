function Add_User()
{
 var Username = document.getElementById("Username").value;
 localStorage.setItem("Username",Username);
 window.location = "Chat room.html";                                                                                                    
}