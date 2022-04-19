var valid = [
{
	username:"Karim",
	password:"Hanna"
},
{
	username:"Kari",
	password:"Hann"
},
{
	username:"Kar",
	password:"Han"
},
{
	username:"Ka",
	password:"Ha"
}
]

function getInfo(){
	var username = document.getElementById("uname").value
	var password = document.getElementById("pass").value
	for(var i = 0; i < valid.length; i++) {
		if(username == valid[i].username && password == valid[i].password) {
			alert(username + " is logged in!!!")
			return
		}
	}
	alert("incorrect username or password")
}

function showMessage() {
                alert("Thank you for submitting your feedback");
            }
			
function showMessage2() {
                alert("Thank you for submitting somebody will be in contact");
            }