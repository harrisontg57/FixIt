function submitNewUser(userName, password){
    console.log("Beginning of function");
    var newAcc = {
        "Username": userName.value,
        "Password": password.value
    }

    loginService.addUser(newAcc, function(data, status){
        console.log("Made it to loginService function");
        if(data.message != "success"){
            console.log("Error!");
            return;
        }
        console.log(newAcc);
    })

    console.log("Username: " + document.getElementById(userName).value);
    console.log("Password: " + document.getElementById(password).value);
}