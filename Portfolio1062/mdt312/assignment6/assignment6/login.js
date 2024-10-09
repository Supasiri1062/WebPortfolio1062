window.onload = loginLoad;
function loginLoad(){
	var x = document.getElementById("myLogin");
	x.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username')
const password = urlParams.get('password')	
if((document.forms["myLogin"]["username"].value != username)||(document.forms["myLogin"]["password"].value != password)){
	alert("username or password invalid");
	return false;
}
alert("Login successful");
}