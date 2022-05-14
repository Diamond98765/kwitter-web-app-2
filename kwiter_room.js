user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ user_name + "!";
function addRoom()
{
room_name=document.getElementById("room_name").value;



}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location= "kwiter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
 window.location = "index.html";
}

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
