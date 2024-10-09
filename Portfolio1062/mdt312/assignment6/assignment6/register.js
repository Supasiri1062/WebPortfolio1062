window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myRegister");
	form.onsubmit = validateForm;
}

function validateForm() {
    var require = [];
    require[0] = document.forms["myRegister"]["lastname"];
    require[1] = document.forms["myRegister"]["gender"];
    require[2] = document.forms["myRegister"]["bday"];
    require[3] = document.forms["myRegister"]["email"];
    require[4] = document.forms["myRegister"]["username"];
    for(var i = 0; i < 5; i++){
        if(!require[i].value){
            var errormsg = document.getElementById("errormsg");
            errormsg.innerHTML = "requirement in need";
            return false;
        }
    }
    var password = document.forms["myRegister"]["password"];
    if(password[0].value != password[1].value){
        var errormsg = document.getElementById("errormsg");
        errormsg.innerHTML = "passsword has to be the same";
        return false;
    }
    alert("OK");
}