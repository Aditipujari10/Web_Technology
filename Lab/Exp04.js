function SubmitButtonClick(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";

    let isValid = true;
    if(name == ""){
        document.getElementById('nameError').innerHTML = "Name field is require";
        isValid = false;
    }

    let isEmailValid = true;
    if(email == ""){
        document.getElementById('emailError').innerHTML = "Email field is require";
        isEmailValid = false;
    }

    let isPassValid = true;
    if(password == ""){
        document.getElementById('passwordError').innerHTML = "Password field is require";
        isPassValid = false;
    }else if(password)


}   
