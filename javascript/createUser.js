function submitNewUser(){
    console.log("Beginning of function");
    var userName = $("#username-create").val();
    var password = $("#password-create").val();

    var newAcc = {
        Username: $(userName).val(),
        Password: $(password).val()
    };

    loginService.addUser(newAcc, function(data, status){
        console.log("Made it to loginService function");
        if(data.message != "success"){
            console.log("Error!");
            return;
        }
        console.log(newAcc);
    })
}