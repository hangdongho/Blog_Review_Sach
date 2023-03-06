const btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click', function (e) {
    let isValid = validate();
    let isMatch=checkMatch();
    if(isMatch == false)
    {
        document.getElementById("confirmpass").innerHTML = "Password and confirm password do not match";
        e.preventDefault();
    }
    else
    {
        document.getElementById("confirmpass").innerHTML = "";
    }
    if (isValid==true && isMatch == true) {
        document.getElementById("successnoti").innerHTML = "You have registered successfully";
        //alert("You have registered successfully");
        e.preventDefault();
        return false;
    }
    else
        return true;
});
function checkMatch() {
    var firstpassword = document.myForm.password.value;
    var secondpassword = document.myForm.confirmPassword.value;
    if (firstpassword == secondpassword) {
        document.getElementById("confirmpass").innerHTML = "";
        return true;

    } else {
        document.getElementById("confirmpass").innerHTML = "Password and confirm password do not match";
        return false;
    }
}
function validate() {
    // var name = document.myForm.userName.value;
    //var password = document.myForm.password.value;
    //var cfpassloc = document.myForm.cfPassword.value;
    var status = false;
    if (document.myForm.userName.value == "") {
        document.getElementById("name").innerHTML = "Username is required";
        status = false;
    }
    else {
        document.getElementById("name").innerHTML = "";
        status = true;
    }
    if (document.myForm.password.value == "") {
        document.getElementById("pass").innerHTML = "Password is required";
        status = false;
    }
    else {
        document.getElementById("pass").innerHTML = "";
        status = true;
    }
    if (document.myForm.confirmPassword.value == "") {
        document.getElementById("confirmpass").innerHTML = "Confirm password is required";
        status = false;
    }
    else {
        document.getElementById("confirmpass").innerHTML = "";
        status = true;
    }
    return status;
}



